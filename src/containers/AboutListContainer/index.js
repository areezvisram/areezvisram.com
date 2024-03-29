import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import AboutList from '../../components/About/AboutList';
import { useSelector } from 'react-redux';
import { serverURL } from '../../constants/server';

const AboutListContainer = () => {
    const state = useSelector((state) => state.tokenReducer);
    const token = state.items;

    const [languages, setLanguages] = useState([]);
    const [skills, setSkills] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!state.loading) {
            fetch(`${serverURL}/about/getLanguages`, {
                method: 'GET',
                headers: {
                    'Access-Token': token
                }
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw response;
                })
                .then((data) => {
                    setLanguages(data.languages);
                })
                .catch((error) => {
                    setError(error);
                });
            fetch(`${serverURL}/about/getSkills`, {
                method: 'GET',
                headers: {
                    'Access-Token': token
                }
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw response;
                })
                .then((data) => {
                    setSkills(data.skills);
                })
                .catch((error) => {
                    setError(error);
                })
        }
    }, [state.loading])

    return (
        <Box display='flex' flexDirection='row' flexWrap='wrap' alignItems='center' mx='auto'>
            <AboutList title='Languages' listItems={error ? [] : languages} />
            <AboutList title='Skills' listItems={error ? [] : skills} />
        </Box>
    );
};

export default AboutListContainer;