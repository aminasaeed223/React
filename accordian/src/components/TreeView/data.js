const menus= [
    {
        id: 1,
        title: "Home",
        children: []
    },
    {
        id: 2,
        title: "Products",
        children: [
            {
                id: 3,
                title: "Electronics",
                children: [
                    { id: 4, title: "Mobile Phones", children: [] },
                    { id: 5, title: "Laptops", children: [] }
                ]
            },
            {
                id: 6,
                title: "Clothing",
                children: [
                    { id: 7, title: "Men", children: [] },
                    { id: 8, title: "Women", children: [] }
                ]
            }
        ]
    },
    {
        id: 9,
        title: "About Us",
        children: []
    },
    {
        id: 10,
        title: "Contact",
        children: []
    },
    {
        id: 11,
        title: "Services",
        children: [
            {
                id: 12,
                title: "Consulting",
                children: []
            },
            {
                id: 13,
                title: "Support",
                children: []
            }
        ]
    }
];
export default menus;