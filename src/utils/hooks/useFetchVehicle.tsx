import { useEffect, useState } from "react";
import { getVehicle } from "../api";
import { Vehicle } from "../types";

export function useFetchVehicle(id: string) {
    const [vehicle, setVehicle] = useState<Vehicle>();
    const [vehicleName, setVehicleName] = useState('');
    const [vehicleManu, setVehicleManu] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        getVehicle(id)
            .then(({ data }) => {
                setVehicle(data);
            })
            .catch((err) => {
                console.log(err);
                setError(err);
            })
            .finally(() => {
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            });
    }, []);
    return { vehicle, vehicleName, setVehicleName, vehicleManu, setVehicleManu, vehicleColor, setVehicleColor, loading, error };
}