/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { DialogContent, DialogOverlay } from "@reach/dialog";
import { useNavigate } from "react-router-dom";
import closeSvg from '../assets/close.svg';
import close1Svg from '../assets/close1.svg';
import * as auth from '../auth';
import { AuthInput, Label, P, Tag } from "../components/lib";
import addSvg from '../assets/add.svg';
import { useState } from "react";
import client from "../utils/api-client";
import { useAsync } from "../utils/hooks/useAsync";

const newTool = async (body, tools, setTools, dismiss) => {
    let tool = null;
    const token = auth.getToken();
    if (token) {
        const { data } = await client('tools/add', { token, data: body });
        tool = data;
        const newTools = [...tools];
        newTools.push(tool);
        setTools(newTools);
        dismiss()
    }
    return tool
}

export default function AddTool({ tools, setTools, runTools, list }) {
    const navigate = useNavigate();
    const { run } = useAsync()
    const [tags, setTags] = useState([]);
    const [addNewTag, setAddNewTag] = useState(false);
    function onDismiss() {
        navigate(-1);
    }
    function onSubmit(e) {
        e.preventDefault();
        const { name, description, link } = e.target.elements;
        run(newTool({ name: name.value, description: description.value, link: link.value, lists: list, tags }, tools, setTools, onDismiss))
    }
    function addTag(event) {
        event.preventDefault();
        console.log(event.target.elements.tag);
        const { tag } = event.target.elements;
        const newTags = [...tags];
        newTags.push(tag.value);
        setTags(newTags);

    }
    return <DialogOverlay aria-labelledby="label"
        css={{
            background: 'rgba(15, 15, 15, 0.55)'
        }} onDismiss={onDismiss}>
        <DialogContent aria-labelledby="label"
            css={{
                maxWidth: 671,
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
                    Add a new tool
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
            <form id='save-tag' onSubmit={addTag} css={{ display: 'none' }} />
            <form
                onSubmit={onSubmit}
                css={{
                    display: 'flex',
                }}>
                <div css={{
                    marginLeft: 24,
                    marginTop: 16
                }}>
                    <Label>Name</Label>
                    <AuthInput id='name' css={{ width: 240 }} />
                    <Label css={{
                        marginTop: 8
                    }}>Description</Label>
                    <textarea id='description' css={{
                        display: 'block',
                        border: ' 1px solid #EFEFEF',
                        boxShadow: 'inset 0px 1px 1px rgba(0, 0, 0, 0.14)',
                        borderRadius: 2,
                        outline: 'none',
                        width: 320,
                        height: 90
                    }}></textarea>
                    <Label css={{ marginTop: 8 }}>Official docs</Label>
                    <AuthInput id='link' css={{ width: 240 }} />
                    <button
                        css={{
                            color: '#353522',
                            opacity: 0.9,
                            background: '#F3ED5D',
                            border: '1px solid #D3D3D3',
                            borderRadius: 2,
                            paddingRight: 16,
                            paddingLeft: 16,
                            cursor: 'pointer',
                            marginBottom: 24,
                            marginTop: 16

                        }}>add a tool</button>
                </div>
                <div css={{ marginLeft: 32, marginTop: 16, width: 250, height: 110 }}>
                    <P>Add Tags<img src={addSvg} alt='add icon' height={24} width={24}
                        onClick={() => setAddNewTag(true)}
                        css={{
                            marginLeft: 7,
                            position: 'relative',
                            top: 6,
                            cursor: 'pointer'
                        }} /></P>
                    <div css={{
                        width: 250,
                        display: 'flex',
                        flexWrap: 'wrap',
                        marginTop: 16
                    }}>
                        {tags.map(tag => <Tag css={{ marginRight: 8, marginTop: 8 }} name={tag} />)}
                    </div>
                    {addNewTag && (
                        <div

                            css={{ height: 32 }}>
                            <input id='tag'
                                form='save-tag'
                                css={{
                                    border: 'none',
                                    borderBottom: '2px solid #353522',
                                    width: 100,
                                    height: '100%',
                                    outline: 'none',
                                    fontSize: 16,

                                }} />
                            <img src={close1Svg} alt='close icon' height={24} width={24}
                                onClick={() => setAddNewTag(false)}
                                css={{
                                    position: 'relative',
                                    top: 12,
                                    cursor: 'pointer'
                                }} />
                        </div>
                    )}

                </div>
            </form>
        </DialogContent>
    </DialogOverlay>
}

