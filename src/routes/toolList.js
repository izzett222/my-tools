/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { Link } from 'react-router-dom';
import { P, ToolHeader, Tag } from "../components/lib";

function Tool({ tool, ...props }) {
    return <Link to={`tool/${tool.id}`} css={{
        textDecoration: 'none',
        width: 'calc(100% - 18px)',
        display: 'block',
        border: '1px solid #D3D3D3',
        paddingLeft: 16,
        marginBottom: 8
    }} {...props}>
       <ToolHeader css={{
           marginTop: 12,
       }}>{tool.name}</ToolHeader> 
       <P css={{ maxWidth: 500, lineHeight: '138.7%'}}>{tool.description}</P>
       <div css={{
           marginTop: 16,
           display: 'flex',
           marginBottom: 24
       }}>{tool.tags.map(tag => <Tag name={tag} />)}</div>
    </Link>
}

export default function ToolList({ tools, filter }) {
    return <div css={{
        maxWidth: 672,
        boxSizing: 'border-box',
        margin: '0 auto',
        marginTop: 24
    }}>
        {tools?.filter(tool => tool.name.includes(filter.trim())).map(tool => {
            return <Tool key={tool.id} tool={tool} />
        })}
    </div>
}