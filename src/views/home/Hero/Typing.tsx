import { Text } from '@chakra-ui/layout';
import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

type option = {
    strings: string[],
    typeSpeed: number,
    backSpeed: number,
    loop: boolean,
    showCursor: boolean;
};

const Typing = () => {
    const [text, setText] = useState<string[]>([
        "Corporation", "Team", "Ceremony"
    ]);
    const options: option = {
        strings: text,
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        showCursor: false
    };

    const typed = useRef<any>(null);
    const typingRef = useRef<any>();

    useEffect(() => {
        typed.current = new Typed(typingRef.current, options);

        return function () {
            typed.current.destroy();
        };
    });

    return (
        <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" as="span" color="yellow.500">
            <span ref={el => typingRef.current = el} />
        </Text>
    );
};

export default Typing;
