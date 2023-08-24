import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Finance() {
    const [tabPlugins, setTabPlugins] = useState([]);
    const [jsonData, setJsonData] = useState({});
    const isChecked = useSelector((state)=>state.checked)

    useEffect(() => {
        fetchData();
    }, []);

    const localHost = 'http://localhost:1997';

    const fetchData = async () => {
        try {
            const response = await fetch(`${localHost}/data`);
            const jsondata = await response.json();
            const { tabdata, plugins } = jsondata;

            const activePlugins = tabdata.tab2.active.map(pluginName => plugins[pluginName]);
            const disabledPlugins = tabdata.tab2.disabled.map(pluginName => plugins[pluginName]);
            const inactivePlugins = tabdata.tab2.inactive.map(pluginName => plugins[pluginName]);
            setTabPlugins([...activePlugins , ...disabledPlugins, ...inactivePlugins]);
            setJsonData(jsondata);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='plugins-container'>
        <h3 className='marketing'>Finance Plugins</h3>
        {tabPlugins.length > 0 && (
            <Row>
                {tabPlugins.map(plugin => (
                    <Col key={plugin.title} lg={4} md={12} sm={12} className="plugins-column">
                        <div className={`plugin-box ${isChecked ? '' : 'disabled'}`}>
                        <div className='slider-container'>
                            <h4 className="plugin-title">{plugin.title}</h4>
                        <label className="switch">
                        <input type="checkbox" checked={jsonData.tabdata.tab2.active.includes(plugin.title.toLowerCase().replace(/\s/g, '')) || jsonData.tabdata.tab2.disabled.includes(plugin.title.toLowerCase().replace(/\s/g, ''))}/>
                        <span className="slider round"></span>
                        {jsonData.tabdata.tab2.active.includes(plugin.title.toLowerCase().replace(/\s/g, '')) || jsonData.tabdata.tab2.disabled.includes(plugin.title.toLowerCase().replace(/\s/g, '')) ? <p className="allowed">Allowed</p> :<p className="blocked">Blocked</p>}
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

export default Finance;
