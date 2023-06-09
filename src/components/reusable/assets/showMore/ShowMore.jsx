import React, {useRef, useState} from 'react';
import Checkbox from "./Checkbox.jsx";
import PrimaryButton from "../../btns/buttons/PrimaryButton.jsx";
import {Link} from "react-router-dom";
import cn from "classnames";

export const HardCode = () => {
    return (
        <ul className={'show-more__list list-show'}>
            <li>
                <Checkbox/>
                <div>
                    <div className='list-show__title'>Premium-Only Content</div>
                    <div className='list-show__text'>Access to Exclusive Content from Hundreds of Independent Creators
                    </div>
                </div>
            </li>
            <li>
                <Checkbox/>
                <div>
                    <div className='list-show__title'>Premium-Only Content</div>
                    <div className='list-show__text'>Participate in Premium-Member-Only Challenges and Contests to Win
                        Rewards
                    </div>
                </div>

            </li>
            <li>
                <Checkbox/>
                <div>
                    <div className='list-show__title'>Double Rewards</div>
                    <div className='list-show__text'>Get 2x Buzzcoin for Participating in Challenges and Contests</div>
                </div>

            </li>
            <li>
                <Checkbox/>
                <div>
                    <div className='list-show__title'>Premium Tools</div>
                    <div className='list-show__text'>Access to Premium Tools for Personal Growth, Wellness, and
                        Productivity
                    </div>
                </div>

            </li>
            <li>
                <Checkbox/>
                <div>
                    <div className='list-show__title'>Exclusive Deals and Offers</div>
                    <div className='list-show__text'>Access to Exclusive Content, Offers, and Deals</div>
                </div>

            </li>
            <li>
                <Checkbox/>
                <div>
                    <div className='list-show__title'>Premium-Member Badge</div>
                    <div className='list-show__text'>Exclusive Premium-Member Badge to Stand Out in the Community.</div>
                </div>

            </li>
            <li>
                <Link to='/sale/subscribe'>
                    <PrimaryButton className=''>Subscribe</PrimaryButton>
                </Link>
            </li>
        </ul>
    )
}

const ShowMore = ({text, content, onShowMore, current, labelText, hideBtn}) => {
    const [showMore, setShowMore] = useState(false);
    const contentRef = useRef(null);

    const handleShowMore = () => {
        onShowMore ? onShowMore() : setShowMore(!showMore);
    }

    const nav = ({position}) => (
        <div className={cn("show-more__wrap-btn text-left", {
            "show-more__wrap-btn_a": showMore,
            "mb-3": position && position !== "bottom",
            "show-more__wrap-btn--bottom": position && position === "bottom"
        })}>
            {!showMore && (
                <div className="d-flex justify-content-between">
                    {!current ? <a href="/" className='show-more__subscribe-now'>
                        Subscribe now
                    </a> : <span className="show-more__label">{labelText}</span>}
                    {!hideBtn && <button className="text-primary  show-more__btn-show show-more__btn_a"
                            onClick={handleShowMore}>Learn more
                    </button>}
                </div>
            )}
            {!hideBtn && <button className={cn("show-more__btn-hide text-alt-primary", {
                "show-more__btn_a": showMore
            })}
                    onClick={handleShowMore}
            >
                Close
            </button>}
        </div>
    );

    return (
        <div className={cn("show-more text-r", {
            "text-secondary": !onShowMore
        })}>
            {text && <div>{text}</div>}
            {!onShowMore && nav({position: "top"})}
            <div
                ref={contentRef}
                className={`show-more__content ${showMore ? 'show-more__content_a' : ''}`}
                style={onShowMore ? null : {maxHeight: showMore ? `${contentRef.current.scrollHeight}px` : 0}}
            >
                {content}
            </div>
            {onShowMore && nav({position: "bottom"})}
        </div>
    )
};

export default ShowMore;