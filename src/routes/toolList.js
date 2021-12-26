/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { Link, useLocation } from 'react-router-dom';
import { P, ToolHeader, Tag } from "../components/lib";

function Tool({ tool, ...props }) {
    const location = useLocation()
    return <Link to={`tool/${tool.id}`}
        state={{ backgroundLocation: location }}
        css={{
            textDecoration: 'none',
            width: 'calc(100% - 18px)',
            display: 'block',
            border: '1px solid #D3D3D3',
            paddingLeft: 16,
            marginBottom: 8,
        }} {...props}>
        <ToolHeader css={{
            marginTop: 12,
        }}>{tool.name}</ToolHeader>
        <P css={{
            maxWidth: 500, lineHeight: '138.7%',
            marginRight: 24
        }}>{tool.description}</P>
        <div css={{
            marginTop: 16,
            display: 'flex',
            marginBottom: 24,
            flexWrap: "wrap"

        }}>{tool.tags.map(tag => <Tag name={tag.name} />)}</div>
    </Link>
}

export default function ToolList({ tools, filter }) {
    return <div css={{
        maxWidth: 672,
        boxSizing: 'border-box',
        margin: '0 auto',
        marginTop: 24,
        "@media (max-width: 704px)": {
            width: 'auto',
            marginRight: 16,
            marginLeft: 16,
        }
    }}>
        {tools?.filter(tool => tool.name.includes(filter.trim())).map(tool => {
            return <Tool key={tool.id} tool={tool} />
        })}
    </div>
}