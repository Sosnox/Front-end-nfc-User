import Link from 'next/link';
import React, { useState, useEffect } from 'react';

interface CardData {
    [key: string]: string; 
}

const SearchCard : React.FC = (id_card : any) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [results, setResults] = useState<CardData>({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://210.246.215.173:8000/searchCard/` + id_card);
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
    };

    return (
        <div>
            <div>
                <input type="text" className="p-4" onChange={handleInputChange} />
                {searchTerm.length > 0 && Object.entries(results)
                    .filter(([key, value]) => value.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map(([key, value]) => (
                        <Link href={`/Cards/${value}`} className="bg-white p-4">{value}</Link>
                    ))}
            </div>
        </div>
    );
}

export default SearchCard;
