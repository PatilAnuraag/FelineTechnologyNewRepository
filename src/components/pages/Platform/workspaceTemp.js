import { useEffect, useState } from "react";

const useGetWorkspaces = () => {

    const [workspaceConfig, setWorkspaceConfig] = useState('');
    const [selectedWorkspace, setselectedWorkspace] = useState('');
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        if (dataLoaded) return;

        const fetchData = async () => {
            var myHeaders = new Headers();
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                //body: urlencoded,
                redirect: 'follow'
            };

            const response = await fetch("config/workspaces.json", requestOptions)
            const result = await response.json();

            console.log('response : ', result.data.workspaces);

            setWorkspaceConfig(result.data.workspaces);

            console.log('workspace config : ', workspaceConfig);

            setDataLoaded(true);
        }

        fetchData();

    })

    return { workspaceConfig };
}

export default useGetWorkspaces;
