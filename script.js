{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener('DOMContentLoaded', () => \{\
    let count = 0;\
    const countDisplay = document.getElementById('count');\
    const addPersonButton = document.getElementById('add-person');\
    const removePersonButton = document.getElementById('remove-person');\
\
    addPersonButton.addEventListener('click', () => \{\
        count++;\
        updateCountDisplay();\
    \});\
\
    removePersonButton.addEventListener('click', () => \{\
        if (count > 0) \{\
            count--;\
            updateCountDisplay();\
        \}\
    \});\
\
    function updateCountDisplay() \{\
        countDisplay.textContent = count;\
    \}\
\});}