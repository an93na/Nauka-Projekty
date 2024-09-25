import React, { useEffect, useState } from 'react'
import { Dessert } from './Dessert'
import cake from '../assets/cake.jpg'
import cake1 from '../assets/cake1.jpg'
import cake2 from '../assets/cake2.jpg'
import cake3 from '../assets/cake3.jpg'
import cake4 from '../assets/cake4.jpg'
import cake5 from '../assets/cake5.jpg'
import cake6 from '../assets/cake6.jpg'
import cake7 from '../assets/cake7.jpg'
import cake8 from '../assets/cake8.jpg'
import cake9 from '../assets/cake9.jpg'
import cake10 from '../assets/cake10.jpg'
import cake11 from '../assets/cake11.jpg'
import cake12 from '../assets/cake12.jpg'
import cake13 from '../assets/cake13.jpg'
import cake14 from '../assets/cake14.jpg'
import cake15 from '../assets/cake15.jpg'
export const Test = () => {
    const [menu, SetMenu] = useState([])
    const getMenu = () => {
        fetch("http://localhost:3010/menu").then((response) => response.json())
            .then((data) => {
                SetMenu(data);
            });
    }
    useEffect(() => {
        getMenu();
    }, []);
    const images = {
        0: cake,
        1: cake1,
        2: cake2,
        3: cake3,
        4: cake4,
        5: cake5,
        6: cake6,
        7: cake7,
        8: cake8,
        9: cake9,
        10: cake10,
        11: cake11,
        12: cake12,
        13: cake13,
        14: cake14,
        15: cake15
    }
    const zdjecie = (a) => {
        return images[a] || cake
    }
    const ustawWRzedzie = (id, name, short, price, img) => {
        if (id <= 3) {
           return <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px' }}>
                <Dessert tekst={name} tekst2={short} cena={price} cake={zdjecie(img)} id={id} />
            </div>
        }
        else if (id > 3 && id <= 6) {
            return <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px' }}>
                <Dessert tekst={name} tekst2={short} cena={price} cake={zdjecie(img)} id={id} />
            </div>
        }
    }
    return (
        <div>
            {menu.map((deser) => ustawWRzedzie(deser.id, deser.name, deser.short, deser.price, deser.img))}
        </div>
    )
}
