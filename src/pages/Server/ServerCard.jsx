import {useState} from "react";
import classes from "./Servers.module.css";
import {ContextIcon, DownloadIcon} from "../../components/svg/Icons";
import ServerIcon from '../../assets/images/serverIcon.jpg';

const ServerCard = ({className}) => {
    // eslint-disable-next-line no-unused-vars
    const [isHover, setIsHover] = useState(false);

    const onFocus = () => {
        setIsHover(true)
    };

    const onBlur = () => {
        setIsHover(true)
    };

    return (
        <div className={`${className} ${classes['server-card']}`} onFocus={onFocus} onBlur={onBlur}>
            <div className={classes['server-card__header']}>
                <DownloadIcon className={classes['server-card__download-icon']} />
                <a className={classes['server-card__title']} href={'/server'}>TechnoMagic</a>
                <ContextIcon className={classes['server-card__context-icon']}/>
            </div>
            <img className={classes['server-card__icon']} src={ServerIcon} alt={'ServerIcon'}/>
            <div className={classes['server-card__footer']}>
                <span className={classes['server-card__version']}>1.12.2</span>
                <span className={classes['server-card__online']}>
                        <span className={classes['server-card__online-icon']}>•</span> 10 / 125
                </span>
            </div>
            {/*isHover && some svg play button*/}
        </div>
    )
}

export default ServerCard;
