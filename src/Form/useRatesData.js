import { useState, useEffect } from "react";
import axios from "axios";
import { getCurrenciesDataFromApi } from "./api";


export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
        rates: null,
        date: null,
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await getCurrenciesDataFromApi();

                setRatesData({
                    state: "success",
                    rates: response.data,
                    date: response.meta,
                });
            } catch {
                setRatesData({
                    state: "error",
                });
            }
        };

        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData;
};