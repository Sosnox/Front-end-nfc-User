import React, { useMemo, useState } from 'react';
import {
    Input,
    Select,
    SelectItem,
    Modal,
    Button,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,

    Image
} from "@nextui-org/react";
import FiveStar from '@/components/fivestar';
import sendDataToFastAPI from '@/api/Feedback/insertFeedback';
import SearchBoardFeedback from '@/components/SearchBoardFeedback';

interface InputValue {
    id_boardgame: number;
    name_report: string;
    detail_report: string;
    rating: number;
    checktypes: string;
};
export default function FeedbackPage() {

    const [valueInput, setValueInput] = useState<InputValue>({
        id_boardgame: 0,
        name_report: '',
        detail_report: '',
        rating: 0,
        checktypes: '',
    });

    const handleChange = (id: number) => {
        setValueInput(prevState => ({
            ...prevState,
            id_boardgame: id,
        }))
    }

    const [isModalVisible, setModalVisible] = useState(false);
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const submitData = async () => {
        onOpen()
        console.log("Clicked");
        try {
            const response = await sendDataToFastAPI(valueInput);
            if ((response as { status: boolean }).status) {
                setModalVisible(true);
            }
        } catch (error) {
            console.log("Error", error);
        }
    };

    console.log(valueInput, "valueInput");


    return (
        <div className="flex flex-col items-center p-12">
            <Modal isOpen={isOpen} onClose={onClose} placement='center'>
                <ModalContent>
                    <ModalHeader>Success</ModalHeader>
                    <ModalBody className='flex flex-col justify-center items-center'>
                        <Image src="/iconCheck.svg" width={100} height={200} />
                        <label>Feedback submitted successfully</label>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onPress={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <label className='text-3xl font-bold pb-10'>Feedback Form</label>
            <div className='flex flex-col gap-4 pb-5 w-full justify-center items-center'>
                <Input
                    type="text"
                    label="ชื่อ"
                    variant="bordered"
                    placeholder='โซดี้'
                    onChange={(e) => setValueInput(prevState => ({
                        ...prevState,
                        name_report: e.target.value,
                    }))}
                    className="max-w-xs"
                />
                <Input
                    type="text"
                    label="ความคิดเห็นเพิ่มเติม"
                    variant="bordered"
                    onChange={(e) => setValueInput(prevState => ({
                        ...prevState,
                        detail_report: e.target.value,
                    }))}
                    placeholder='Add your comments...'
                    className="max-w-xs"
                />
                    <div className='flex flex-col w-full pl-3 sm:items-center items-start'>
                        <label>ความพึงพอใจ</label>
                        <FiveStar rating={(rating) => setValueInput(prevState => ({
                            ...prevState,
                            rating: rating,
                        }))} />
                    </div>
                <SearchBoardFeedback handleChange={handleChange} />
                <div className='flex w-full justify-end md:justify-center'>
                    <Button className='bg-blue-400 text-white p-2 rounded-md mt-7 hover:bg-slate-600' onClick={submitData}>Submit</Button>
                </div>
            </div>
        </div>
    );
}
