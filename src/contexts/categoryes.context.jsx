import { createContext,useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utiles/firebase/firebase.utiles.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    //* Adding shop data to database */
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // },[])

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCategoriesMap(categoryMap)
        };

        getCategoriesMap()
    }, []);

    const value = { categoriesMap }
    return (
        <CategoriesContext.Provider value = {value}>{children}</CategoriesContext.Provider>
    )
}