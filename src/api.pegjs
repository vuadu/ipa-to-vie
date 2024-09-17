Word = " "* "/"? syllables:Syllable* "/"? " "* {
    return syllables
}
Syllable =
    stress:("ˈ" / "ˌ")? head:Consonant stress2:("ˈ" / "ˌ")? tail:(Vowel EndingConsonant) !(Diphthong / Vowel)  {
    stress = stress || stress2
    return {
        stress: stress === 'ˈ' ? 1 : stress === 'ˌ' ? 2 : undefined,
        parts: [head, tail.filter(c => c).join("")]
        }
    }
    / stress:("ˈ" / "ˌ")? head:Consonant stress2:("ˈ" / "ˌ")? tail:(Diphthong / Vowel)? {
    stress = stress || stress2
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
    / stress:("ˈ" / "ˌ")? tail:(Diphthong DiphthongEndingConsonant?) {
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
DiphthongEndingConsonant   =
    "b"
    / "t" !"ʃ" { return text() }
    / "k"
    / "m"
    / "ɡ"
    / "ɛ"
    / "n"
    / "e"
//    / "p"
    / "h"
    / "ŋ"
Diphthong = "oʊ" / "eɪ" / "aɪ" / "aʊ" / "ju" / "jə" / "jæ" / "jɑ" / "jʊ" / "jɛ" / "jɪ" / "jɔ" / "ji" / "joʊ" / "jaʊ" / "jeɪ" / "əj" / "ɔɪ"
Vowel = "a" / "ʊ" / "ə" / "ɔ" / "u" / "ɪ" / "o" / "ɛ" / "e" / "i" / "ɑ" / "ɝ" / "æ" / "j"
