'use client'
import Link from "next/link";
import Image from "next/image";
import { IBM_Plex_Sans_Thai } from 'next/font/google'
import React, {useState, useEffect} from 'react';
import { db } from './firebase'
import {doc, addDoc, collection, updateDoc, deleteDoc, getDocs} from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage";

export default function Navbar() {
    const[name, setName] = useState()
    const[fetchData, setFetchData] = useState()
    
    const dbref = collection(db, 'CRUD')

    const add = async () => {
        const adddata = await addDoc(dbref, {Name: name})
        if (adddata) {
            alert("Data Added Successfully")
            window.location.reload()
        } else{
            alert("Error Occured To add the data")
        }
    }
    const fetch = async () =>
    {
        try{
            const snapshot = await getDocs(dbref)
            setFetchData(snapshot.docs.map((doc => ({id: doc.id, ...doc.data()}))))
        } catch (e) {
            console.log(e)
        }

    }


    useEffect(()=> 
    {
        fetch()
    },[])

    function handleOnChange(e) {
        const target = e.target
        setName(target.value)
        console.log(name)

    }

  return (
    <div className='flex flex-col h-screen bg-red-100 w-[15%] fixed'>
        <div className="text-[#DAD9D9] bg-[#3C4454] h-[90%] w-full flex flex-col justify-between items-center">
            <div className="h-[40%] w-full">
                <div>
                    <div className='w-10 h-10 m-2 rounded-sm bg-contain bg-top bg-no-repeat bg-[url("/ucilogo.png")]'></div>
                </div>
                <div className="align-center justify-center flex">
                    <div className="border-dashed border-b border-[#8F8181] w-[90%] h-1" />
                </div>
                <ul className='flex flex-col m-4'>
                <Link href="/profile" className = 'mt-1 text-[#DAD9D9] h-10 flex items-center rounded-md hover:outline-solid hover:outline-[#8C8A8A] hover:outline pl-2'>Profile</Link>
                <Link href="/market" className = 'mt-1 text-[#DAD9D9] h-10 flex items-center rounded-md hover:outline-solid hover:outline-[#8C8A8A] hover:outline pl-2'>Marketplace</Link>
                <Link href="/storefront" className = 'mt-1 text-[#DAD9D9] h-10 flex items-center rounded-md hover:outline-solid hover:outline-[#8C8A8A] hover:outline pl-2'>Your Storefront</Link>
                <Link href="/likes" className = 'mt-1 text-[#DAD9D9] h-10 flex items-center rounded-md hover:outline-solid hover:outline-[#8C8A8A] hover:outline pl-2'>Likes</Link>
                <Link href="/messages" className = 'mt-1 text-[#DAD9D9] h-10 flex items-center rounded-md hover:outline-solid hover:outline-[#8C8A8A] hover:outline pl-2'>Messages</Link>
                </ul>
                {
                    fetchData?.map((data) =>{ 
               
                        return(
                            <>
                            <div>
                                <h3>Name: {data.Name} </h3>    
                            </div>  
                            </>
                        )
                    })
                }
            </div>
            <Image 
                src="/anteater.png"
                width={75} pl-2
                height={150}
                alt="asdf"
            />
        </div>
        <div className="text-[#FFFFFF] bg-[#484848] h-[10%] w-full" />
        <div>
            <input type='text' placeholder = 'Full Name' autoComplete="Off" value={name} onChange={handleOnChange}></input>
            <button onClick={add}>Add</button>
        </div>

    </div>
  );
}