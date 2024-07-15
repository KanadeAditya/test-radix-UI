// src/app/dashboard/page.tsx or src/pages/dashboard.tsx
'use client'
// import { Component, useState } from 'react';
import { Flex, Text, Grid, ScrollArea } from '@radix-ui/themes';
// import { ChatBubbleIcon } from '@radix-ui/react-icons';

export default function ScrollBar() {

    return (
        <Grid columns="2" gap="2">
            <ScrollArea type="always" scrollbars="vertical" style={{ height: 150 }}>
                <Flex p="2" pr="8" direction="column" gap="4">
                    <Text size="2" trim="both">
                        Three fundamental aspects of typography are legibility, readability, and
                        aesthetics. Although in a non-technical sense "legible" and "readable"
                        are often used synonymously, typographically they are separate but
                        related concepts.
                    </Text>

                    <Text size="2" trim="both">
                        Legibility describes how easily individual characters can be
                        distinguished from one another. It is described by Walter Tracy as "the
                        quality of being decipherable and recognisable". For instance, if a "b"
                        and an "h", or a "3" and an "8", are difficult to distinguish at small
                        sizes, this is a problem of legibility.
                    </Text>
                </Flex>
            </ScrollArea>

            <ScrollArea type="always" scrollbars="horizontal" style={{ height: 150 }}>
                <Flex gap="4" p="2" width="700px">
                    <Text size="2" trim="both">
                        Three fundamental aspects of typography are legibility, readability, and
                        aesthetics. Although in a non-technical sense "legible" and "readable"
                        are often used synonymously, typographically they are separate but
                        related concepts.
                    </Text>

                    <Text size="2" trim="both">
                        Legibility describes how easily individual characters can be
                        distinguished from one another. It is described by Walter Tracy as "the
                        quality of being decipherable and recognisable". For instance, if a "b"
                        and an "h", or a "3" and an "8", are difficult to distinguish at small
                        sizes, this is a problem of legibility.
                    </Text>
                </Flex>
            </ScrollArea>
        </Grid>
    );
}