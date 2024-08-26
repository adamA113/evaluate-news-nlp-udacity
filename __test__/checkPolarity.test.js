import { checkPolarity } from '../src/client/js/dataPolarityCheck';

describe('checkPolarity', () => {
    it('should return "strong positive" for polarity "P+"', () => {
        const result = checkPolarity('P+');
        expect(result).toBe('strong positive');
    });

    it('should return "positive" for polarity "P"', () => {
        const result = checkPolarity('P');
        expect(result).toBe('positive');
    });

    it('should return "neutral" for polarity "NEU"', () => {
        const result = checkPolarity('NEU');
        expect(result).toBe('neutral');
    });

    it('should return "negative" for polarity "N"', () => {
        const result = checkPolarity('N');
        expect(result).toBe('negative');
    });

    it('should return "strong negative" for polarity "N+"', () => {
        const result = checkPolarity('N+');
        expect(result).toBe('strong negative');
    });

    it('should return "without polarity" for polarity "NONE"', () => {
        const result = checkPolarity('NONE');
        expect(result).toBe('without polarity');
    });

    it('should return undefined for an unknown polarity', () => {
        const result = checkPolarity('UNKNOWN');
        expect(result).toBeUndefined();
    });
});