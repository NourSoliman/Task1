import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { toggleChecked } from '../../Redux/MainStore/PluginsButton/Reducer';
import { useDispatch  , useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './sidebar.css'
function Sidebar() {
    const [data, setData] = useState(``)
    const [activeTab, setActiveTab] = useState('');
    const dispatch = useDispatch()
    const isChecked = useSelector((state)=>state.checked)
    useEffect(() => {
        fetchData();
    }, []);
    const localHost = 'http://localhost:1997'
    const fetchData = async () => {
        try {
            const response = await fetch(`${localHost}/data`)
            const jsondata = await response.json()
            const data = jsondata.tabdata
            setData(data)
        }
        catch (error) {
            console.log(error)
        }
    }
    const handleTabClick = (tabTitle) => {
        setActiveTab(tabTitle);
    };
    return (
        <div className="side-bar-container">
            <h2><span className='sidebar-logo'>Data</span><span className='side-bar-guard'>Guard</span></h2>
            {Object.keys(data).map((tab, index) => (
                    <NavLink key={tab} className={`links-container `} to={`/${data[tab].title}`}
                        onClick={() => handleTabClick(data[tab].title)}
                        activeClassName="active"

                    >
                        <div className={`sidebar-item `}>
                        {/* ${activeTab === data[tab].title ? `active` : ``} */}
                        {data[tab].title}
                        </div>
                    </NavLink>
            ))}
            <div className='side-bar-footer'>
            <div className={`footer-content ${isChecked ? 'active' : 'inactive'}`}>
                <p className='all-plugins'>{`${isChecked ? `All Plugins enabled` : `All Plugins disabled`}`}</p>
                <div className='slider-container-two'>
                <label className="switch-two">
                    <input type="checkbox" 
                    checked={isChecked}
                    onChange={() => dispatch(toggleChecked())}
                    />
                    <span className="slider round-two"></span>
                </label>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Sidebar