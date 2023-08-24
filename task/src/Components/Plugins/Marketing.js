import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import './plugins.css'
import { useSelector } from 'react-redux';
function Marketing() {
    const [tabPlugins, setTabPlugins] = useState([]);
    const [jsonData, setJsonData] = useState({});
    const isChecked = useSelector((state) => state.checked)
    console.log(isChecked)
    useEffect(() => {
        fetchData();
    }, []);

    const localHost = 'http://localhost:1997';

    const fetchData = async () => {
        try {
            const response = await fetch(`${localHost}/data`);
            const jsondata = await response.json();
            const { tabdata, plugins } = jsondata;

            const activePlugins = tabdata.tab1.active.map(pluginName => plugins[pluginName]);
            const disabledPlugins = tabdata.tab1.disabled.map(pluginName => plugins[pluginName]);
            const inactivePlugins = tabdata.tab1.inactive.map(pluginName => plugins[pluginName]);
            const orderedPlugins = [
                ...activePlugins.filter(plugin => plugin.title === 'Plugin 1'),
                ...activePlugins.filter(plugin => plugin.title === 'Plugin 2'),
                ...disabledPlugins,
                ...activePlugins.filter(plugin => plugin.title === 'Plugin 4'),
                ...inactivePlugins,
            ];
            setTabPlugins(orderedPlugins);
            setJsonData(jsondata);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className='plugins-container'>
            <h3 className='marketing'>Marketing Plugins</h3>
            {tabPlugins.length > 0 && (
                <Row>
                    {tabPlugins.map(plugin => (
                        <Col key={plugin.title} lg={4} md={12} sm={12} className="plugins-column">
                            <div className={`plugin-box ${isChecked ? '' : 'disabled'}`}>
                                <div className='slider-container'>
                                    <h4 className="plugin-title">{plugin.title}</h4>
                                    <label className="switch">
                                        <input type="checkbox" checked={jsonData.tabdata.tab1.active.includes(plugin.title.toLowerCase().replace(/\s/g, '')) || jsonData.tabdata.tab1.disabled.includes(plugin.title.toLowerCase().replace(/\s/g, ''))} />
                                        <span className="slider round"></span>
                                        {jsonData.tabdata.tab1.active.includes(plugin.title.toLowerCase().replace(/\s/g, '')) || jsonData.tabdata.tab1.disabled.includes(plugin.title.toLowerCase().replace(/\s/g, '')) ? <p className="allowed">Allowed</p> : <p className="blocked">Blocked</p>}
                                    </label>
                                </div>
                                <p className="description">{plugin.description}</p>
                            </div>
                        </Col>

                    ))}
                </Row>
            )}
        </div>
    );
}

export default Marketing;
