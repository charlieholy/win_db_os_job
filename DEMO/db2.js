ORG 0x40

JMP entry
DB 0x90
DB 0x98
RESB	0x50-$    ///   0x40 - 0x50
entry:
    MOV AX，2