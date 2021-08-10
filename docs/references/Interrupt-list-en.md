# Table of Interrupts

- [Table of Interrupts](#table-of-interrupts)
  - [INT 10H](#int-10h)
    - [00H(10H)](#00h10h)
    - [01H(10H)](#01h10h)
    - [02H(10H)](#02h10h)
    - [03H(10H)](#03h10h)
    - [05H(10H)](#05h10h)
    - [06H(10H)](#06h10h)
    - [07H(10H)](#07h10h)
    - [08H(10H)](#08h10h)
    - [09H(10H)](#09h10h)
    - [0AH(10H)](#0ah10h)
    - [0CH(10H)](#0ch10h)
    - [0DH(10H)](#0dh10h)
    - [0EH(10H)](#0eh10h)
    - [13H(10H)](#13h10h)
    - [1003H(10H)](#1003h10h)
      - [bit color table](#bit-color-table)
  - [INT 11H](#int-11h)
  - [INT 12H](#int-12h)
  - [INT 13H](#int-13h)
    - [00H(13H)](#00h13h)
    - [02H(13H)](#02h13h)
    - [03H(13H)](#03h13h)
  - [INT 15H](#int-15h)
    - [86H(15H)](#86h15h)
  - [INT 16H](#int-16h)
    - [00H(16H)](#00h16h)
    - [01H(16H)](#01h16h)
  - [INT 19H](#int-19h)
  - [INT 1AH](#int-1ah)
    - [AH(1AH)](#ah1ah)
  - [INT 20H](#int-20h)
  - [INT 21H](#int-21h)
    - [01H(21H)](#01h21h)
    - [02H(21H)](#02h21h)
    - [05H(21H)](#05h21h)
    - [06H(21H)](#06h21h)
    - [07H(21H)](#07h21h)
    - [09H(21H)](#09h21h)
    - [0AH(21H)](#0ah21h)
    - [0BH(21H)](#0bh21h)
    - [0CH(21H)](#0ch21h)
    - [0EH(21H))](#0eh21h)
    - [19H(21H)](#19h21h)
    - [25H(21H)](#25h21h)
    - [2AH(21H)](#2ah21h)
    - [2CH(21H)](#2ch21h)
    - [35H(21H)](#35h21h)
    - [39H(21H)](#39h21h)
    - [3AH(21H)](#3ah21h)
    - [3BH(21H)](#3bh21h)
    - [3CH(21H)](#3ch21h)
    - [3DH(21H)](#3dh21h)
    - [3EH(21H)](#3eh21h)
    - [3FH(21H)](#3fh21h)
    - [40H(21H)](#40h21h)
    - [41H(21H)](#41h21h)
    - [42H(21H)](#42h21h)
    - [47H(21H)](#47h21h)
    - [4CH(21H)](#4ch21h)
    - [56H(21H)](#56h21h)
  - [INT 33H](#int-33h)
    - [0000H(33H)](#0000h33h)
    - [000AH(33H)](#000ah33h)
    - [0002H(33H)](#0002h33h)
    - [0003H(33H)](#0003h33h)
<!-- The list of all interrupts that are currently supported by the 8086 assembler emulator.-->

These interrupts should be compatible will IBM PC and all generations of x86, original Intel 8086 and AMD compatible microprocessors, however Windows XP may overwrite some of the original interrupts. 

## INT 10H

### 00H(10H)

INT 10h / AH = 0 - set video mode.

* **input**: AL = desired video mode.

these video modes are supported:

- 00h|text mode. 40x25. 16 colors. 8 pages.
- 03h|text mode. 80x25. 16 colors. 8 pages.
- 13h|graphical mode. 40x25. 256 colors. 320x200 pixels. 1 page.
example:

```assembly
 mov al, 13h
 mov ah, 0
 int 10h
```

### 01H(10H)

INT 10h / AH = 01h - set text-mode cursor shape.

- **input**:
  + CH = cursor start line (bits 0-4) and options (bits 5-7).
  + CL = bottom cursor line (bits 0-4).

when bit 5 of CH is set to 0, the cursor is visible. when bit 5 is 1, the cursor is not visible.

```
; hide blinking text cursor:
      mov ch, 32
      mov ah, 1
      int 10h

; show standard blinking text cursor:
      mov ch, 6
      mov cl, 7
      mov ah, 1
      int 10h

; show box-shaped blinking text cursor:
      mov ch, 0
      mov cl, 7
      mov ah, 1
      int 10h

;      note: some bioses required CL to be >=7,
;      otherwise wrong cursor shapes are displayed.
```

### 02H(10H)

INT 10h / AH = 2 - set cursor position.

- **input**:
  + DH = row.
  + DL = column.
  + BH = page number (0..7).

example:

```assembly
 mov dh, 10
 mov dl, 20
 mov bh, 0
 mov ah, 2
 int 10h
 ```

### 03H(10H)

INT 10h / AH = 03h - get cursor position and size.

- input:
  + BH = page number.
- return:
  + DH = row.
  + DL = column.
  + CH = cursor start line.
  + CL = cursor bottom line.

### 05H(10H)

INT 10h / AH = 05h - select active video page.

- input:
  + AL = new page number (0..7).the activated page is displayed.

### 06H(10H)

INT 10h / AH = 06h - scroll up window.

### 07H(10H)

INT 10h / AH = 07h - scroll down window.

- input:
  + AL = number of lines by which to scroll (00h = clear entire window).
  + BH = attribute used to write blank lines at bottom of window.
  + CH, CL = row, column of window's upper left corner.
  + DH, DL = row, column of window's lower right corner.

### 08H(10H)

INT 10h / AH = 08h - read character and attribute at cursor position.

- input:
  + BH = page number.
- return:
  + AH = attribute.
  + AL = character.

### 09H(10H)

INT 10h / AH = 09h - write character and attribute at cursor position.

- input:
  + AL = character to display.
  + BH = page number.
  + BL = attribute.
  + CX = number of times to write character.

### 0AH(10H)

INT 10h / AH = 0Ah - write character only at cursor position.

- input:
  + AL = character to display.
  + BH = page number.
  + CX = number of times to write character.

### 0CH(10H)

INT 10h / AH = 0Ch - change color for a single pixel.

- input:
  + AL = pixel color
  + CX = column.
  + DX = row.
example:

```assembly
 mov al, 13h
 mov ah, 0
 int 10h     ; set graphics video mode.
 mov al, 1100b
 mov cx, 10
 mov dx, 20
 mov ah, 0ch
 int 10h     ; set pixel.
```

### 0DH(10H)

INT 10h / AH = 0Dh - get color of a single pixel.

- input:
  + CX = column.
  + DX = row.
- output:
  + AL = pixel color

### 0EH(10H)

INT 10h / AH = 0Eh - teletype output.

- input:
  + AL = character to write.

this functions displays a character on the screen, advancing the cursor and scrolling the screen as necessary. the printing is always done to current active page.

example:

```assembly
 mov al, 'a'
 mov ah, 0eh
 int 10h

 ; note: on specific systems this
 ; function may not be supported in graphics mode.
```

### 13H(10H)

INT 10h / AH = 13h - write string.

- input:
  + AL = write mode:
    * bit 0: update cursor after writing;
    * bit 1: string contains attributes.
  + BH = page number.
  + BL = attribute if string contains only characters (bit 1 of AL is zero).
  + CX = number of characters in string (attributes are not counted).
  + DL,DH = column, row at which to start writing.
  + ES:BP points to string to be printed.

example:

```assembly
 mov al, 1
 mov bh, 0
 mov bl, 0011_1011b
 mov cx, msg1end - offset msg1 ; calculate message size.
 mov dl, 10
 mov dh, 7
 push cs
 pop es
 mov bp, offset msg1
 mov ah, 13h
 int 10h
 jmp msg1end
 msg1 db " hello, world! "
 msg1end:
```

### 1003H(10H)

INT 10h / AX = 1003h - toggle intensity/blinking.

- input:
  + BL = write mode:
    * 0: enable intensive colors.
    * 1: enable blinking (not supported by the emulator and windows command prompt).
  + BH = 0 (to avoid problems on some adapters).
example:

```assembly
mov ax, 1003h
mov bx, 0
int 10h
```

#### bit color table

character attribute is 8 bit value, low 4 bits set fore color, high 4 bits set background color.

**note**: the emulator and windows command line prompt do not support background blinking, however to make colors look the same in dos and in full screen mode it is required to turn off the background blinking.

|HEX   | BIN  |  COLOR  |
|------|------|---------|
|0     | 0000 |  black  |
|1     | 0001 |  blue   |
|2     | 0010 |  green  |
|3     | 0011 |  cyan   |
|4     | 0100 |  red    |
|5     | 0101 |  magenta    |
|6     | 0110 |  brown  |
|7     | 0111 |  light gray |
|8     | 1000 |  dark gray  |
|9     | 1001 |  light blue |
|A     | 1010 |  light green    |
|B     | 1011 |  light cyan |
|C     | 1100 |  light red  |
|D     | 1101 |  light magenta  |
|E     | 1110 |  yellow |
|F     | 1111 |  white  |

note:

```assembly
; use this code for compatibility with dos/cmd prompt full screen mode:
mov     ax, 1003h
mov     bx, 0   ; disable blinking.
int     10h
```

## INT 11H

INT 11h - get BIOS equipment list.

- return:
  + AX = BIOS equipment list word, actually this call returns the contents of the word at 0040h:0010h.

Currently this function can be used to determine the number of installed number of floppy disk drives.

Bit fields for BIOS-detected installed hardware:

|bit(s) |Description|
|-------|-----------|
 |15-14 | Number of parallel devices.|
 |13    | Reserved.|
 |12    | Game port installed.|
 |11-9  | Number of serial devices.|
 |8     | Reserved.|
 |7-6   | Number of floppy disk drives (minus 1):|
 |      |   00 single floppy disk;|
 |      |   01 two floppy disks;|
 |      |   10 three floppy disks;|
 |      |   11 four floppy disks.|
 |5-4   | Initial video mode:|
 |      |   00 EGA,VGA,PGA, or other with on-board video BIOS;|
 |      |   01 40x25 CGA color.|
 |      |   10 80x25 CGA color (emulator default).|
 |      |   11 80x25 mono text.|
 |3     | Reserved.|
 |2     | PS/2 mouse is installed.|
 |1     | Math coprocessor installed.|
 |0     | Set when booted from floppy.|

## INT 12H

INT 12h - get memory size.

- return:
  + AX = kilobytes of contiguous memory starting at absolute address 00000h, this call returns the contents of the word at 0040h:0013h.

Floppy drives are emulated using FLOPPY_0(..3) files.

## INT 13H

### 00H(13H)

INT 13h / AH = 00h - reset disk system.

### 02H(13H)

INT 13h / AH = 02h - read disk sectors into memory.

### 03H(13H)

INT 13h / AH = 03h - write disk sectors.

- input:
  + AL = number of sectors to read/write (must be nonzero)
  + CH = cylinder number (0..79).
  + CL = sector number (1..18).
  + DH = head number (0..1).
  + DL = drive number (0..3 , for the emulator it depends on quantity of FLOPPY_ files).
  + ES:BX points to data buffer.
- return:
  + CF set on error.
  + CF clear if successful.
  + AH = status (0 - if successful).
  + AL = number of sectors transferred.

Note: each sector has 512 bytes.

## INT 15H

### 86H(15H)

INT 15h / AH = 86h - BIOS wait function.

- input:
  + CX:DX = interval in microseconds
- return:
  + CF clear if successful (wait interval elapsed),
  + CF set on error or when wait function is already in progress.

**Note**:

the resolution of the wait period is 977 microseconds on many systems (1 million microseconds - 1 second).
Windows XP does not support this interrupt (always sets CF=1).

## INT 16H

### 00H(16H)

INT 16h / AH = 00h - get keystroke from keyboard (no echo).

- return:
   +AH = BIOS scan code.
   +AL = ASCII character.

(if a keystroke is present, it is removed from the keyboard buffer).

### 01H(16H)

INT 16h / AH = 01h - check for keystroke in the keyboard buffer.

- return:
  + ZF = 1 if keystroke is not available.
  + ZF = 0 if keystroke available.
  + AH = BIOS scan code.
  + AL = ASCII character.

(if a keystroke is present, it is not removed from the keyboard buffer).

## INT 19H

INT 19h - system reboot.

Usually, the BIOS will try to read sector 1, head 0, track 0 from drive A: to 0000h:7C00h. The emulator just stops the execution, to boot from floppy drive select from the menu: 'virtual drive' -> 'boot from floppy'

## INT 1AH

### AH(1AH)

INT 1Ah / AH = 00h - get system time.

- return:
  + CX:DX = number of clock ticks since midnight.
  + AL = midnight counter, advanced each time midnight passes.

notes:

there are approximately 18.20648 clock ticks per second,
and 1800B0h per 24 hours.
AL is not set by the emulator.  

## INT 20H

INT 20h - exit to operating system.

## INT 21H

The short list of emulated MS-DOS interrupts -- INT 21h

DOS file system is emulated in C:\emu8086\vdrive\x (x is a drive letter)

If no drive letter is specified and current directory is not set, then C:\emu8086\MyBuild\ path is used by default. FLOPPY_0,1,2,3 files are emulated independently from DOS file system.

For the emulator physical drive A: is this file c:\emu8086\FLOPPY_0 (for BIOS interrupts: INT 13h and boot).

For DOS interrupts (INT 21h) drive A: is emulated in this subdirectory: C:\emu8086\vdrive\a\

Note: DOS file system limits the file and directory names to 8 characters, extension is limited to 3 characters;
example of a valid file name: myfile.txt (file name = 6 chars, extension - 3 chars). extension is written after the dot, no other dots are allowed.  

### 01H(21H)

INT 21h / AH=1 - read character from standard input, with echo, result is stored in AL.
if there is no character in the keyboard buffer, the function waits until any key is pressed.

example:

```assembly
 mov ah, 1
 int 21h
```

### 02H(21H)

INT 21h / AH=2 - write character to standard output.
entry: DL = character to write, after execution AL = DL.

example:

```assembly
 mov ah, 2
 mov dl, 'a'
 int 21h
```

### 05H(21H)

INT 21h / AH=5 - output character to printer.
entry: DL = character to print, after execution AL = DL.

example:

```assembly
 mov ah, 5
 mov dl, 'a'
 int 21h
```

### 06H(21H)

INT 21h / AH=6 - direct console input or output.

parameters for output: DL = 0..254 (ascii code)
parameters for input: DL = 255

for output returns: AL = DL
for input returns: ZF set if no character available and AL = 00h, ZF clear if character available.
AL = character read; buffer is cleared.

example:

```assembly
 mov ah, 6
 mov dl, 'a'
 int 21h       ; output character.

 mov ah, 6
 mov dl, 255
 int 21h       ; get character from keyboard buffer (if any) or set ZF=1.
```

### 07H(21H)

INT 21h / AH=7 - character input without echo to AL.
if there is no character in the keyboard buffer, the function waits until any key is pressed.

example:

```assembly
 mov ah, 7
 int 21h
```

### 09H(21H)

INT 21h / AH=9 - output of a string at DS:DX. String must be terminated by '$'.

example:

```assembly
  org 100h
  mov dx, offset msg
  mov ah, 9
  int 21h
  ret
  msg db "hello world $"
```

### 0AH(21H)

INT 21h / AH=0Ah - input of a string to DS:DX, fist byte is buffer size, second byte is number of chars actually read. this function does not add '$' in the end of string. to print using INT 21h / AH=9 you must set dollar character at the end of it and start printing from address DS:DX + 2.

example:

```assembly
  org 100h
  mov dx, offset buffer
  mov ah, 0ah
  int 21h
  jmp print
  buffer db 10,?, 10 dup(' ')
  print:
  xor bx, bx
  mov bl, buffer[1]
  mov buffer[bx+2], '$'
  mov dx, offset buffer + 2
  mov ah, 9
  int 21h
  ret
```

the function does not allow to enter more characters than the specified buffer size.
see also int21.asm in c:\emu8086\examples

### 0BH(21H)

INT 21h / AH=0Bh - get input status;
returns: AL = 00h if no character available, AL = 0FFh if character is available.

### 0CH(21H)

INT 21h / AH=0Ch - flush keyboard buffer and read standard input.
entry: AL = number of input function to execute after flushing buffer (can be 01h,06h,07h,08h, or 0Ah - for other values the buffer is flushed but no input is attempted); other registers as appropriate for the selected input function.

### 0EH(21H))

INT 21h / AH= 0Eh - select default drive.

- Entry: DL = new default drive (0=A:, 1=B:, etc)
- Return: AL = number of potentially valid drive letters

Notes: the return value is the highest drive present.

### 19H(21H)

INT 21h / AH= 19h - get current default drive.

- Return: AL = drive (0=A:, 1=B:, etc)

### 25H(21H)

INT 21h / AH=25h - set interrupt vector;

- input: AL = interrupt number. DS:DX -> new interrupt handler.

### 2AH(21H)

INT 21h / AH=2Ah - get system date;
return: CX = year (1980-2099). DH = month. DL = day. AL = day of week (00h=Sunday)

### 2CH(21H)

INT 21h / AH=2Ch - get system time;
return: CH = hour. CL = minute. DH = second. DL = 1/100 seconds.

### 35H(21H)

INT 21h / AH=35h - get interrupt vector;

- entry: AL = interrupt number;
- return: ES:BX -> current interrupt handler.

### 39H(21H)

INT 21h / AH= 39h - make directory.
entry: DS:DX -> ASCIZ pathname; zero terminated string, for example:

```assembly
org 100h
mov dx, offset filepath
mov ah, 39h
int 21h

ret

filepath DB "C:\mydir", 0  ; path to be created.
end
```

the above code creates c:\emu8086\vdrive\C\mydir directory if run by the emulator.

- Return: CF clear if successful AX destroyed. CF set on error AX = error code.

Note: all directories in the given path must exist except the last one.

### 3AH(21H)

INT 21h / AH= 3Ah - remove directory.

- Entry: DS:DX -> ASCIZ pathname of directory to be removed.
- Return:
    +　CF is clear if successful, AX destroyed CF is set on error AX = error code.

Notes: directory must be empty (there should be no files inside of it).

### 3BH(21H)

INT 21h / AH= 3Bh - set current directory.

- Entry: DS:DX -> ASCIZ pathname to become current directory (max 64 bytes).
- Return:
  + Carry Flag is clear if successful, AX destroyed.
  + Carry Flag is set on error AX = error code.

Notes: even if new directory name includes a drive letter, the default drive is not changed,
only the current directory on that drive.

### 3CH(21H)

INT 21h / AH= 3Ch - create or truncate file.

- entry:
  + CX = file attributes:

```assembly
 mov cx, 0       ;  normal - no attributes.
 mov cx, 1       ;  read-only.
 mov cx, 2       ;  hidden.
 mov cx, 4       ;  system
 mov cx, 7       ;  hidden, system and read-only!
 mov cx, 16      ;  archive
```

DS:DX -> ASCIZ filename.

- returns:
  + CF clear if successful, AX = file handle.
  + CF set on error AX = error code.

note: if specified file exists it is deleted without a warning.

example:

```assembly
 org 100h
 mov ah, 3ch
 mov cx, 0
 mov dx, offset filename
 mov ah, 3ch
 int 21h
 jc err
 mov handle, ax
 jmp k
 filename db "myfile.txt", 0
 handle dw ?
 err:
 ; ....
 k:
 ret
```

### 3DH(21H)

INT 21h / AH= 3Dh - open existing file.

- Entry:AL = access and sharing modes:

```assembly
mov al, 0   ; read
mov al, 1   ; write
mov al, 2   ; read/write
```

DS:DX -> ASCIZ filename.

- Return:
  + CF clear if successful, AX = file handle.
  + CF set on error AX = error code.

- note 1: file pointer is set to start of file.
- note 2: file must exist.

example:

```assembly
 org 100h
 mov al, 2
 mov dx, offset filename
 mov ah, 3dh
 int 21h
 jc err
 mov handle, ax
 jmp k
 filename db "myfile.txt", 0
 handle dw ?
 err:
 ; ....
 k:
 ret
```

### 3EH(21H)

INT 21h / AH= 3Eh - close file.

- Entry: BX = file handle
- Return:
  + CF clear if successful, AX destroyed.
  + CF set on error, AX = error code (06h).

### 3FH(21H)

INT 21h / AH= 3Fh - read from file.

- Entry:
  + BX = file handle.
  + CX = number of bytes to read.

DS:DX -> buffer for data.

- Return:
  + CF is clear if successful - AX = number of bytes actually read; 0 if at EOF (end of file) before call.
  + CF is set on error AX = error code.

Note: data is read beginning at current file position, and the file position is updated after a successful read the returned AX may be smaller than the request in CX if a partial read occurred.

### 40H(21H)

INT 21h / AH= 40h - write to file.

- entry:
  + BX = file handle.
  + CX = number of bytes to write.
  + DS:DX -> data to write.
- return:
  + CF clear if successful; AX = number of bytes actually written.
  + CF set on error; AX = error code.

note: if CX is zero, no data is written, and the file is truncated or extended to the current position data is written beginning at the current file position, and the file position is updated after a successful write the usual cause for AX < CX on return is a full disk.

### 41H(21H)

INT 21h / AH= 41h - delete file (unlink).

- Entry:
  + DS:DX -> ASCIZ filename (no wildcards, but see notes).
- return:
  + CF clear if successful, AX destroyed. AL is the drive of deleted file (undocumented).
  + CF set on error AX = error code.

Note: DOS does not erase the file's data; it merely becomes inaccessible because the FAT chain for the file is cleared deleting a file which is currently open may lead to filesystem corruption.

### 42H(21H)

INT 21h / AH= 42h - SEEK - set current file position.

- Entry:
  + AL = origin of move: 0 - start of file. 1 - current file position. 2 - end of file.
  + BX = file handle.
  + CX:DX = offset from origin of new file position.
- Return:
  + CF clear if successful, DX:AX = new file position in bytes from start of file.
  + CF set on error, AX = error code.

Notes:

for origins 1 and 2, the pointer may be positioned before the start of the file; no error is returned in that case, but subsequent attempts to read or write the file will produce errors. If the new position is beyond the current end of file, the file will be extended by the next write (see AH=40h).

example:

```assembly
 org 100h
 mov ah, 3ch
 mov cx, 0
 mov dx, offset filename
 mov ah, 3ch
 int 21h  ; create file...
 mov handle, ax

 mov bx, handle
 mov dx, offset data
 mov cx, data_size
 mov ah, 40h
 int 21h ; write to file...

 mov al, 0
 mov bx, handle
 mov cx, 0
 mov dx, 7
 mov ah, 42h
 int 21h ; seek...

 mov bx, handle
 mov dx, offset buffer
 mov cx, 4
 mov ah, 3fh
 int 21h ; read from file...

 mov bx, handle
 mov ah, 3eh
 int 21h ; close file...
 ret

 filename db "myfile.txt", 0
 handle dw ?
 data db " hello files! "
 data_size=$-offset data
 buffer db 4 dup(' ')
```

### 47H(21H)

INT 21h / AH= 47h - get current directory.

- Entry:
  + DL = drive number (00h = default, 01h = A:, etc)
  + DS:SI -> 64-byte buffer for ASCIZ pathname.
- Return:
  + Carry is clear if successful
  + Carry is set on error, AX = error code (0Fh)

Notes:

the returned path does not include a drive and the initial backslash.

### 4CH(21H)

INT 21h / AH=4Ch - return control to the operating system (stop program).

### 56H(21H)

INT 21h / AH= 56h - rename file / move file.

- Entry:
  + DS:DX -> ASCIZ filename of existing file.
  + ES:DI -> ASCIZ new filename.
- Return:
  + CF clear if successful.
  + CF set on error, AX = error code.

Note: allows move between directories on same logical drive only; open files should not be renamed!

## INT 33H

mouse driver interrupts -- INT 33h

### 0000H(33H)

INT 33h / AX=0000 - mouse ininialization. any previous mouse pointer is hidden.

returns:
if successful: AX=0FFFFh and BX=number of mouse buttons.
if failed: AX=0
example:

```assembly
mov ax, 0
int 33h
```

see also: mouse.asm in examples.

### 000AH(33H)

INT 33h / AX=0001 - show mouse pointer.

example:

```assembly
mov ax, 1
int 33h
```

### 0002H(33H)

INT 33h / AX=0002 - hide visible mouse pointer.

example:

```assembly
mov ax, 2
int 33h
```

### 0003H(33H)

INT 33h / AX=0003 - get mouse position and status of its buttons.

- returns:
  + if left button is down: BX=1
  + if right button is down: BX=2
  + if both buttons are down: BX=3
  + CX = x
  + DX = y
example:

```assembly
mov ax, 3
int 33h

; note: in graphical 320x200 mode the value of CX is doubled.
; see mouse2.asm in examples.
```
