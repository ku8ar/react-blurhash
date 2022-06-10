import React, { FC } from 'react'
import styled from 'styled-components';
import { Blurhash, BlurhashCanvas } from '../src';

const hash = 'LEHV6nWB2yk8pyo0adR*.7kCMdnj'

const items = [...Array(1024).keys()]

const Blur = styled(Blurhash)`
    width: 32px;
    height: 32px;
`

const Stress: FC<{ async?: boolean }> = ({ async }) => <>
    <p>Stress test</p>
    {items.map(i => (
        <Blur
            key={i}
            hash={hash}
            punch={2}
            async={async}
        />
    ))}
</>

export default Stress;
