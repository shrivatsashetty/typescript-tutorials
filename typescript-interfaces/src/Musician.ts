
export default interface Musician {
    name: string;
    instrument: string;

    // method signature with no implementation
    play(action: string): string;
} 