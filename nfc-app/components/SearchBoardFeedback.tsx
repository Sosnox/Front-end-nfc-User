import { Input } from '@nextui-org/react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

interface CardData {
    [key: string]: string; 
}

export const SearchBoardFeedback = ({ handleChange }: any) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [results, setResults] = useState<CardData>({});
    const [isOpen, setIsOpen] = useState<boolean>(true); // State to track if the dropdown is open
    const [placeholder, setPlaceholder] = useState<string>('Type to Search Game . . .');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.dlst.online/searchGame`);
                if (response.ok) {
                    const data: CardData = await response.json();
                    setResults(data);
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setIsOpen(true); // Open the dropdown when user starts typing
    };

    const sendKeyIdBoard = (key: any , value : any) => {
        setPlaceholder(value);
        handleChange(key);
        setSearchTerm('');
        setIsOpen(false);
    };

    return (
        <div className='relative'>
            <Input
                type="text"
                label="Search Game"
                size='lg'
                labelPlacement="outside"
                variant="bordered"
                placeholder={placeholder}
                className="rounded-xl w-[320px] border-black p-4 h-12"
                onChange={handleInputChange}
                value={searchTerm}
            />
            {isOpen && searchTerm.length > 0 && (
                <div className='absolute rounded-xl mt-1 w-48 left-10'>
                    {Object.entries(results)
                        .filter(([key, value]) => value.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map(([key, value]) => (
                            <div key={key} className='bg-white  w-[250px] border-gray-200'>
                                <div className="block p-1 text-lg hover:bg-gray text-[14px] break-all z-5" onClick={() => sendKeyIdBoard(key , value)}>
                                    <span>{value}</span>
                                </div>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
}

export default SearchBoardFeedback;
