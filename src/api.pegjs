Word = " "* "/"? syllables:Syllable* "/"? " "* {
    return syllables
}
Syllable =
    stress:("ˈ" / "ˌ")? head:Consonant tail:(Vowel EndingConsonant) !(Diphthong / Vowel)  {
    return {
        stress: stress === 'ˈ' ? 1 : stress === 'ˌ' ? 2 : undefined,
        parts: [head, tail.filter(c => c).join("")]
        }
    }
    / stress:("ˈ" / "ˌ")? head:Consonant tail:(Diphthong / Vowel)? {
    return {
        stress: stress === 'ˈ' ? 1 : stress === 'ˌ' ? 2 : undefined,
        parts: [head, tail]
        }
    }
    / stress:("ˈ" / "ˌ")? tail:(Vowel EndingConsonant) !Vowel {
    return {
        stress: stress === 'ˈ' ? 1 : stress === 'ˌ' ? 2 : undefined,
        parts: [null, tail.filter(c => c).join("")]
        }
    }
    / stress:("ˈ" / "ˌ")? tail:(Diphthong EndingConsonant?) {
    return {
        stress: stress === 'ˈ' ? 1 : stress === 'ˌ' ? 2 : undefined,
        parts: [null, tail.filter(c => c).join("")]
        }
    }
    / stress:("ˈ" / "ˌ")? tail:Vowel {
    return {
        stress: stress === 'ˈ' ? 1 : stress === 'ˌ' ? 2 : undefined,
        parts: [null, tail]
        }
    }
SyllableEnding =
    tail:(Vowel EndingConsonant) !Vowel { return tail.filter(c => c).join("") }

Consonant =
    "b"
    / "tʃ"
    / "tɹ"
    / "t"
    / "kw"
    / "k"
    / "z"
    / "ɹ"
    / "s"
    / "m"
    / "f"
    / "ɡ"
    / "n"
    / "ɫ"
    / "w"
    / "p"
    / "θ"
    / "v"
    / "h"
    / "ŋ"
    / "ʃ"
    / "ʒ"
    / "dʒ"
    / "d"
    / "ð"

EndingConsonant   =
    "b"
    / "t" !"ʃ" { return text() }
    / "k"
    / "m"
    / "ɡ"
    / "ɛ"
    / "n"
    / "e"
    / "p"
    / "h"
    / "ŋ"
Diphthong = "oʊ" / "eɪ" / "aɪ" / "aʊ" / "ju" / "jə" / "jæ" / "jɑ" / "jʊ" / "jɛ" / "jɪ" / "jɔ" / "ji" / "joʊ" / "jaʊ" / "jeɪ" / "əj" / "ɔɪ"
Vowel = "a" / "ʊ" / "ə" / "ɔ" / "u" / "ɪ" / "o" / "ɛ" / "e" / "i" / "ɑ" / "ɝ" / "æ" / "j"
