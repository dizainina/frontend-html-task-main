import './sidebar.scss';
import { motion} from 'framer-motion';
import {
    AccountBalanceWalletOutlined,
    BarChartRounded,
    HomeOutlined,
    DonutLargeSharp,
    KeyboardArrowLeftOutlined,
    LoyaltyOutlined,
    MailOutlineOutlined,
    PhoneInTalkOutlined,
    SettingsInputComponentOutlined} from '@mui/icons-material';
import { useState } from 'react';
import logo from '../../assets/logo.png'
import { Divider } from '@mui/material';


const routes = [
    { name: 'Home', icon: <HomeOutlined/>, path: '/' },
    { name: 'Sales', icon: <LoyaltyOutlined/>, path: '/sales' },
    { name: 'Costs', icon: <BarChartRounded/>, path: '/costs' },
    { name: 'Payments', icon: <AccountBalanceWalletOutlined/>, path: '/payments' },
    { name: 'Finances', icon: <DonutLargeSharp/>, path: '/finances' },
    { name: 'Messages', icon: <MailOutlineOutlined/>, path: '/messages' },
];

const bottomRoutes = [
    { name: 'Settings', icon: <SettingsInputComponentOutlined/>, path: '/settings' },
    { name: 'Support', icon: <PhoneInTalkOutlined/>, path: '/support' },
];

function Sidebar() {

    const [open, setOpen] = useState(true);
    const [active, setActive] = useState();

    const handleToggle = ()=>{
        setOpen(!open);
    }

    const goToRoute = (path) => {
        console.log(`going to "${path}"`);
        setActive(path)
    };

    let className;
    const classNameActive = (path) => {
        if(active === path){
            className =  'item active'
        }else{
            className =  'item'
        }
        return className;
    }

    const sideContainerVariants={
        true:{
            width:"15rem",
        },
        false:{
            transition:{
                delay:0.5,
            }
        }
    }

    const sidebarVariants={
        true:{},
        false:{
            width:"3rem",
            transition:{
                delay:0.3
            }
        }
    }

    const arrowVariants = {
        true:{
            marginRight: "-27px"
        },
        false:{
            marginRight: "-47px"
        }
    }

    const subheading = {
        true:{
            opacity: 1,
        },
        false:{
            opacity: 0,
            display: 'none',
            transition:{
                delay:0.3
            }
        }
    }

    return (
        <div className="Sidebar">
            {/* sidebar_container */}
            <motion.div
                data-open = {open}
                variants = {sideContainerVariants}
                initial={`${open}`}
                animate={`${open}`}
                className='sidebar_container'>
                {/* sidebar */}
                <motion.div
                    initial={`${open}`}
                    animate={`${open}`}
                    variants = {sidebarVariants}
                    className="sidebar">
                    {/* logo */}
                    <div className='logo'>
                        <img className='logo-img' src={ logo } alt="TensorFlow logo"/>
                        <motion.span
                            variants = {subheading}
                            className='span-text'
                        >TensorFlow</motion.span>
                    </div>
                    {/* arrow_icon */}
                    <motion.div
                        whileHover={{
                            cursor: "pointer"
                        }}
                        variants = {arrowVariants}
                        onClick={handleToggle}
                        animate={{
                            backgroundColor: open ? '#e2e8f0' : '#ffffff',
                            rotate: open ? 0 : '180deg'
                        }}
                        className="arrow_icon">
                        <KeyboardArrowLeftOutlined/>
                    </motion.div>
                    {/* groups */}
                    <div className='groups'>
                        {/* group 1 */}
                        <div>
                            {
                                routes.map((route) => (
                                    <motion.div
                                        whileHover={{
                                            backgroundColor: "#e8ebf2",
                                            cursor: "pointer",
                                            color: "#817f7f",
                                            fontWeight: 600
                                        }}
                                        transition={{
                                            type: 'none', duration: 0.2
                                        }}
                                        key={ route.name } onClick={ () => goToRoute(route.path) } className={classNameActive(route.path)}>
                                        <motion.div className='icon'>{route.icon}</motion.div>
                                        <motion.span variants = {subheading}>{route.name}</motion.span>
                                    </motion.div>
                                ))
                            }

                        </div>
                        <Divider />
                        {/* group 2 */}
                        <div>
                            {
                                bottomRoutes.map((route) => (
                                    <motion.div
                                        whileHover={{
                                            backgroundColor: "#e8ebf2",
                                            cursor: "pointer",
                                            color: "#817f7f",
                                            fontWeight: 600
                                        }}
                                        transition={{
                                            type: 'none', duration: 0.2
                                        }}
                                        key={ route.name } onClick={ () => goToRoute(route.path) } className={classNameActive(route.path)}>
                                        <motion.div className='icon'>{route.icon}</motion.div>
                                        <motion.span variants = {subheading}>{route.name}</motion.span>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            <div className='body_container' ></div>
        </div>
    );

}


export default Sidebar;
