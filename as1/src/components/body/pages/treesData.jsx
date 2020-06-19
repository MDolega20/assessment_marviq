import img_1 from '../../../img/jodla_kaukazka320x320.png';
import img_2 from '../../../img/swierk_zwykly320x320.png';
import img_3 from '../../../img/swierk_srebrny320x320.png';

// wiadomosc do rafala
// XDDDDDDDDDDDDDDDDDDDDDDDDD
// NO TAK ................... :)))))))))))
// to jest bardzo wazny plik wiec uwazaj
// kazdy objekt ktory ma id to osoby gatunek drzewka
// description = opis drzewka
// name = nazwa drzewka
// options => detail = cena detaliczna
// options => detail = cena hurtowa
// wypelnianie dnaych przy cenie detalicznnej i hutowej jest podobne
// options => detail => hearvest = cena detaliczna za choinke scieto
// options => detail => pot = cena detaliczna za choinke w doniczne
// options => detail => hearvest oraz options => detail => pot to listy które zawierają obiekty min = wielkosc minimalna z przedzialu cenowego, max =  wielkosc maksymalna z przedzialu cenowego, price = cena
// trzeba uzupełnić wszytskie 3 gatuneki o ceny hurtowe

const treesData = [
    {
        id: 1,
        name: "jodła kaukaska",
        description: "",
        image: img_1,
        options: {
            detail: {
                harvest:[
                    {
                        min: 80,
                        max: 130,
                        price: 69
                    },
                    {
                        min: 130,
                        max: 180,
                        price: 85
                    },
                    {
                        min: 180,
                        max: 250,
                        price: 120
                    },
                    {
                        min: 250,
                        // max: 280,
                        max: null,
                        price: 160
                    },
                    // {
                    //     min: 280,
                    //     max: null,
                    //     price: null
                    // },
                ],
                pot: [
                    {
                        min: 120,
                        max: 170,
                        price: 80
                    },
                ]
            },
            mass: {
                harvest:[
                    {
                        min: 130,
                        max: 280,
                        price: 40
                    },
                ],
                pot: []
            }

        }
    },{
        id: 2,
        name: "świerk zwykły",
        description: "",
        image: img_2,
        options: {
            detail: {
                harvest:[
                    {
                        min: 100,
                        max: 170,
                        price: 35
                    },
                    {
                        min: 170,
                        max: 220,
                        price: 45
                    },
                    {
                        min: 220,
                        max: 280,
                        price: 65
                    },
                    {
                        min: 280,
                        max: null,
                        price: 90
                    },
                ],
                pot: [
                    {
                        min: 120,
                        max: 170,
                        price: 50
                    },
                ]
            },
            mass: {
                harvest:[
                    {
                        min: 150,
                        max: 450,
                        price: 10
                    },
                ],
                pot: []
            }

        }
    },{
        id: 3,
        name: "świerk srebrny",
        description: "",
        image: img_3,
        options: {
            detail: {
                harvest:[
                    {
                        min: 80,
                        max: 150,
                        price: 40
                    },
                    {
                        min: 150,
                        max: 250,
                        price: 60
                    },
                ],
                pot: [
                    {
                        min: 120,
                        max: 180,
                        price: 70
                    },
                ]
            },
            mass: {
                harvest:[
                    {
                        min: 150,
                        max: 300,
                        price: 15
                    },
                ],
                pot: []
            }

        }
    }
];

export default treesData;
