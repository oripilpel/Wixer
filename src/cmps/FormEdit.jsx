import { useState, useEffect } from "react";
import { Switch } from '@mui/material';


export function FormEdit({ data, onUpdate }) {
    const [isDark, setIsDark] = useState(data.isDark)
    function onChange({ target }) {
        setIsDark(target.checked)
        onUpdate('data', { ...data, isDark: target.checked });
    }

    useEffect(() => {
        setIsDark(data.isDark)
    }, [data])

    return (
        <div className="form-edit flex">
            <label htmlFor="dark-switch">Dark Mode </label>
            <Switch id="dark-switch" value={isDark} onChange={onChange} />
        </div>
    )
}