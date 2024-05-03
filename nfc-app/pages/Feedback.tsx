import React, { useMemo, useState } from 'react';
import {
    Input,
    Select,
    SelectItem,
    Modal,
    Button ,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter, 
    useDisclosure,
    Spinner,
    Image} from "@nextui-org/react";
import FiveStar from '@/components/fivestar';
import sendDataToFastAPI from '@/api/Feedback/insertFeedback';

export default function FeedbackPage() {
    type InputValue = {
        name_report: string;
        detail_report: string;
        rating: number;
        checktypes: string;
        };

    const [valueInput, setValueInput] = useState<InputValue>({
        name_report: '',
        detail_report: '',
        rating: 0,
        checktypes: '',
    });

    const [isModalVisible, setModalVisible] = useState(false);
    const {isOpen, onOpen, onOpenChange ,onClose} = useDisclosure();

    const submitData = async () => {
        onOpen()
        console.log("Clicked");
        try {
            await sendDataToFastAPI(valueInput);
            setModalVisible(true);
        } catch (error) {
            console.log("Error", error);
        }
    };

    const checkType = ["Card", "BoardGame"];
    console.log(valueInput);

    return (
        <div className="flex flex-col items-center p-12 ">
            <Modal isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    placement='center'
                    onClose={onClose}
            >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl">Success</ModalHeader>
              <ModalBody className='flex flex-col justify-center items-center text-lg'>
                    <Image src="/iconCheck.svg" width={100} height={200} />
                    <label>ส่ง Feedback สำเร็จ</label>
              </ModalBody>
                <ModalFooter>
                    <Button color="primary" onPress={onClose}>
                    Close
                    </Button>
                </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
            <label className='text-3xl font-bold pb-10'>Feedback Form</label>
            <div className='flex flex-col gap-4 pb-5 w-full justify-center items-center'>
                <Input
                    type="text"
                    label="Name"
                    variant="bordered"
                    placeholder='Name'
                    onChange={(e) => setValueInput(prevState => ({
                        ...prevState,
                        name_report: e.target.value,
                    }))}
                    className="max-w-xs"
                />
                <Select
                    required
                    label="Choose Type"
                    placeholder="Select Type"
                    color="default"
                    className="max-w-xs pb-5"
                    onChange={(e) => setValueInput(prevState => ({
                        ...prevState,
                        checktypes: e.target.value,
                    }))}
                >
                    {checkType.map((type) => (
                        <SelectItem key={type} value={type}>
                            {type}
                        </SelectItem>
                    ))}
                </Select>
                <div className='flex flex-col w-full pb-4 pl-3 sm:items-center items-start'>
                    <div>Share</div>
                    <FiveStar rating={(rating: number) => {
                        setValueInput(prevState => ({
                            ...prevState,
                            rating: rating,
                        }));
                    }} />
                </div>
                <Input
                    type="text"
                    label="Comment"
                    variant="bordered"
                    onChange={(e) => setValueInput(prevState => ({
                        ...prevState,
                        detail_report: e.target.value,
                    }))}
                    placeholder='Add your comments...'
                    className="max-w-xs h-40"
                />
                <div className='flex w-full justify-end md:justify-center'>
                    <button className='bg-blue-400 text-white p-2 rounded-md mt-7 hover:bg-slate-600' onClick={submitData}>Submit</button>
                </div>
            </div>
        </div>
    );
}
