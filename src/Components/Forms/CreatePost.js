import { useState } from 'react'
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import DI from '../../Assets/defaultImage.jpg'

const CreatePost = () => {
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const { getAccessTokenSilently } = useAuth0();
    const [image, SetImage] = useState('');
    const [imageSrc, SetImageSrc] = useState(DI);
    const [caption, SetCaption] = useState('');
    const [createState, setCreateState] = useState('Submit');

    function handleImage(e) {
        console.log(e.target.files);
        SetImage(e.target.files[0]);

        SetImageSrc(URL.createObjectURL(e.target.files[0]))
    }

    function handleCaption(e) {

        SetCaption(e.target.value);
    }

    const handleApi = async () => {
        try {
            const formData = new FormData();
            formData.append("image", image, image.name);
            formData.append('caption', caption);

            console.log(formData);
            const token = await getAccessTokenSilently();

            const response = await fetch(`${serverUrl}/api/Post/CreatePost`,
                {
                    method: 'POST',
                    headers: {
                        Authorization: `${token}`,
                    },
                    body: formData,
                },
            );
            const responseData = await response.json();
        } catch (error) {
            console.log(error)
        }
        setCreateState('✓');
    };

    const { isAuthenticated } = useAuth0();

    if (isAuthenticated) {
        return (
            <div className="w-full justify-center items-center dark:bg-gray-600" >
                <div className="w-full flex-col justify-center items-center " >
                    <div className='inline-block content-center'>
                        <img class="max-w-lg h-auto rounded-lg" alt="image description" src={imageSrc} />
                    </div>
                </div>
                <div className="flex justify-center items-center w-full">
                    <label for="dropzone-file" className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col justify-center items-center pt-5 pb-6">
                            <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" onChange={handleImage} />
                    </label>
                </div>
                <div className="bg-gray-700 rounded-lg">
                    <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-1" type="text" placeholder="type caption" onChange={handleCaption}></input>
                </div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1' onClick={handleApi}>{createState}</button>
            </div>);
    } else {
        return (
            <div className='inline-block content-center w-full m-[150px]'>
                <p className='text-4xl'>Login or sign up to create posts</p>
            </div>
        )
    }
}

export default CreatePost;