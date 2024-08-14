Word = " "* "/"? syllables:("ˌ"?  Syllable)* "/"? " "* {
    return syllables.map(p => p[1])
}
Syllable =
    stress:"ˈ"? head:Consonant tail:(Vowel EndingConsonant) !(Diphthong / Vowel)  {
    return {
        stress: !!stress || undefined,
        parts: [head, tail.filter(c => c).join("")]
        }
    }
    / stress:"ˈ"? head:Consonant tail:(Diphthong / Vowel)? {
    return {
        stress: !!stress || undefined,
        parts: [head, tail]
        }
    }
    / stress:"ˈ"? tail:(Vowel EndingConsonant) !Vowel {
    return {
        stress: !!stress || undefined,
        parts: [null, tail.filter(c => c).join("")]
        }
    }
    / stress:"ˈ"? tail:(Diphthong EndingConsonant?) {
    return {
        stress: !!stress || undefined,
        parts: [null, tail.filter(c => c).join("")]
        }
    }
    / stress:"ˈ"? tail:Vowel {
    return {
        stress: !!stress || undefined,
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
