import React, { createContext, useState, useContext } from 'react';

const DepartmentFilterContext = createContext();

export const useDepartmentFilter = () => {
    return useContext(DepartmentFilterContext);
}

export const DepartmentFilterProvider = ({ children }) => {
    const [departmentFilter, setDepartmentFilter] = useState("");

    return (
        <DepartmentFilterContext.Provider value={{ departmentFilter, setDepartmentFilter }}>
            {children}
        </DepartmentFilterContext.Provider>
    );
}