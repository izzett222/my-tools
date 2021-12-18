/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { DialogContent, DialogOverlay } from "@reach/dialog";
import { useNavigate, useParams } from "react-router-dom";
import closeSvg from '../assets/close.svg';
import rightArrow from '../assets/rightarrow.svg'
import {  P, Tag } from "../components/lib";

export default function Tool({ tools }) {
    const params = useParams();
    const navigate = useNavigate();
    function onDismiss() {
        navigate(-1);
    }
    const tool = tools.find(el => el.id === parseInt(params.id, 10));
    console.log(tool, params);
    return <DialogOverlay aria-labelledby="label"
        css={{
            background: 'rgba(15, 15, 15, 0.55)'
        }} onDismiss={onDismiss}>
        <DialogContent aria-labelledby="label"
            css={{
                maxWidth: 494,
                padding: 0,
                borderRadius: 4,
                boxShadow: '0px 5px 100px rgba(15, 15, 15, 0.2)',
            }}>
            <div css={{
                height: 70,
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '2px solid #EFEFEF'
            }}>
                <h4 css={{
                    marginLeft: 24,
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '20px',
                    lineHeight: '37px',
                    color: '#353522',
                    verticalAlign: 'middle',
                    display: 'inline-block',
                    height: '37px'
                }}>
                    {tool.name}
                </h4>
                <button
                    onClick={onDismiss}
                    css={{
                        border: 'none',
                        background: 'none',
                        marginRight: 8,
                        position: 'relative',
                        top: 4,
                        cursor: 'pointer'
                    }}>
                    <img src={closeSvg} height={30} width={30} alt='close icon' />
                </button>
            </div>
            <div css={{
                marginLeft: 32,
                marginRight: 32,
                marginTop: 16,
                paddingBottom: 16
            }}>
                <P>{tool.description}</P>
                <div css={{
                    display: 'flex',
                    marginTop: 16,
                    marginBottom: 16
                }}>
                    {tool.tags.map(tag => <Tag name={tag} css={{ width: 'auto' }} />)}
                </div>
                <a href={`https://${tool.link}`}

                    css={{
                        display: 'block',
                        color: '#353522',
                        textDecoration: 'none',
                    }} >Official Docs<img src={rightArrow} height={14} width={8} alt="right arrow" css={{
                        position: 'relative',
                        left: 6,
                        top: 3,
                    }}  /></a>
               
            </div>

        </DialogContent>
    </DialogOverlay>
}

