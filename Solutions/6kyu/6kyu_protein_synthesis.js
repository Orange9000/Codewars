const transD = {'T':'A','A':'U','G':'C','C':'G'}

var aminos = `Ala    GCU, GCC, GCA, GCG
Leu    UUA, UUG, CUU, CUC, CUA, CUG
Arg    CGU, CGC, CGA, CGG, AGA, AGG
Lys    AAA, AAG
Asn    AAU, AAC
Met    AUG
Asp    GAU, GAC
Phe    UUU, UUC
Cys    UGU, UGC
Pro    CCU, CCC, CCA, CCG
Gln    CAA, CAG
Ser    UCU, UCC, UCA, UCG, AGU, AGC
Glu    GAA, GAG
Thr    ACU, ACC, ACA, ACG
Gly    GGU, GGC, GGA, GGG
Trp    UGG
His    CAU, CAC
Tyr    UAU, UAC
Ile    AUU, AUC, AUA
Val    GUU, GUC, GUA, GUG
Stop   UAG, UGA, UAA`

aminos = aminos.split('\n')

function proteinSynthesis(dna) {
  const rna=[...dna].map(e=>transD[e]).join``.match(/.{3}|.{1,2}/g)
  const protein=rna.filter(e=>e.length==3).map(e=>aminos.filter(a=>a.includes(e))[0].match(/[a-z]+/gi)[0])
  return [rna.join` `,protein.join` `];
}
