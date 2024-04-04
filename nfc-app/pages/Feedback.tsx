import React, { useState } from 'react';
import Image from 'next/image';
import { Input, Select, SelectItem } from "@nextui-org/react";
import FiveStar from '@/components/fivestar';
import sendDataToFastAPI from '@/api/Feedback/insertFeedback';


export default function FeedbackPage() {

    type InputValue = {
        name_report: string;
        contact: string;
        detail_report: string;
        rating: number;
        checktypes: string;
    }

    const checkType = ["Card", "BoardGame"]

    const [valueInput, setValueInput] = useState<InputValue>({
        name_report: '',
        contact: '',
        detail_report: '',
        rating: 0,
        checktypes: ''
    })

    const submitData = async (valueInput : InputValue) => {
        console.log("Clicked")
        try {
            await sendDataToFastAPI(valueInput);
            console.log("success")
          } catch (error) {
            console.log("error", error)
          }
    }
    console.log(valueInput)

    return (
        <div className="flex flex-col items-center p-12 ">
            <label className='text-3xl font-bold pb-10'>Feedback Form</label>
            <div className='flex flex-col gap-4 pb-5 w-full justify-center items-center'>
                <Input
                    type="text"
                    label="Name"
                    variant="bordered"
                    placeholder='Name'
                    onChange={(e) => {
                        setValueInput(prevState => ({
                            ...prevState,
                            name_report: e.target.value,
                        }));
                    }}
                    className="max-w-xs"
                />
                <Input
                    type="email"
                    label="Contact"
                    variant="bordered"
                    placeholder='juzi@nextui.org'
                    onChange={(e) => {
                        setValueInput(prevState => ({
                            ...prevState,
                            contact: e.target.value,
                        }));
                    }}
                    className="max-w-xs"
                />
            </div>
            <Select
                required
                label="Choose Type"
                placeholder="Card / BoardGame"
                color="default"
                className="max-w-xs pb-5"
                onChange={(e) => {
                    setValueInput(prevState => ({
                        ...prevState,
                        checktypes: e.target.value,
                    }));
                }}
            >
                {checkType.map((type: string) => (
                    <SelectItem key={type} value={type}>
                        {type}
                    </SelectItem>
                ))}
            </Select>
            <div className='flex flex-col w-full pb-4 sm:items-center items-start'>
                <div>Share</div>
                <FiveStar rating={(rating: number) => {
                    setValueInput(prevState => ({
                        ...prevState,
                        rating: rating,
                    }));
                }} />
            </div>
            <Input
                type="email"
                label="Comment"
                variant="bordered"
                onChange={(e) => {
                    setValueInput(prevState => ({
                        ...prevState,
                        detail_report: e.target.value,
                    }));
                }}
                placeholder='Add your comments...'
                className="max-w-xs"
            />
            <div className='flex w-full justify-end md:justify-center'>
                <button className='bg-blue-400 text-white p-2 rounded-md mt-7 hover:bg-slate-600' onClick={() => submitData(valueInput)}>Submit</button>
            </div>
        </div>
    );
}
