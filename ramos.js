const ramos = {
  // Semestre 1
  "Bases y Fundamentos de la Medicina I": {
    codigo: "MED107A",
    semestre: 1
  },
  "Química": {
    codigo: "QIM201M",
    semestre: 1
  },
  "Psicología Médica": {
    codigo: "MED109A",
    semestre: 1
  },
  "Física": {
    codigo: "FIS119M",
    semestre: 1
  },
  "Razonamiento Matemático": {
    codigo: "MAT1033",
    semestre: 1
  },
  "OFG I": {
    semestre: 1
  },

  // Semestre 2
  "Bases y Fundamentos de la Medicina II": {
    codigo: "MED108A",
    semestre: 2,
    requisitos: ["Bases y Fundamentos de la Medicina I"]
  },
  "Morfología I": {
    codigo: "MED111A",
    semestre: 2,
    requisitos: ["Bases y Fundamentos de la Medicina I"]
  },
  "Biología Molecular de la Célula": {
    codigo: "BIO239M",
    semestre: 2,
    requisitos: ["Química"]
  },
  "Bioestadística": {
    codigo: "MED104B",
    semestre: 2,
    requisitos: ["Bases y Fundamentos de la Medicina I", "Razonamiento Matemático"]
  },
  "Integrado Ciencias Médicas I": {
    codigo: "MED110A",
    semestre: 2,
    requisitos: ["Bases y Fundamentos de la Medicina I"]
  },
  "OFG II": {
    semestre: 2
  },

  // Semestre 3
  "Morfología II": {
    codigo: "MED212A",
    semestre: 3,
    requisitos: ["Morfología I"]
  },
  "Inmunología y Genética": {
    codigo: "MED208A",
    semestre: 3,
    requisitos: ["Biología Molecular de la Célula"]
  },
  "Antropología y Ética": {
    codigo: "MED207A",
    semestre: 3,
    requisitos: ["Bases y Fundamentos de la Medicina II"]
  },
  "Salud Pública": {
    codigo: "MED206A",
    semestre: 3,
    requisitos: ["Bioestadística"]
  },
  "Integrado Ciencias Médicas II": {
    codigo: "MED209A",
    semestre: 3,
    requisitos: ["Integrado Ciencias Médicas I"]
  },
  "OFG III": {
    semestre: 3
  },

  // Semestre 4
  "Morfología III": {
    codigo: "MED213A",
    semestre: 4,
    requisitos: ["Morfología II"]
  },
  "Bases y Mecanismos de la Enfermedad I": {
    codigo: "MED214A",
    semestre: 4,
    requisitos: ["Morfología II", "Inmunología y Genética", "Biología Molecular de la Célula"]
  },
  "Integrado Ciencias Médicas III": {
    codigo: "MED210A",
    semestre: 4,
    requisitos: ["Integrado Ciencias Médicas II", "Morfología II"]
  },
  "Teológico": {
    semestre: 4
  },

  // Semestre 5
  "Clínica I": {
    codigo: "MED308A",
    semestre: 5,
    requisitos: ["Salud Pública", "Antropología y Ética", "Inmunología y Genética", "Morfología III", "Bases y Mecanismos de la Enfermedad I"]
  },
  "Microbiología Médica": {
    codigo: "MED306B",
    semestre: 5,
    requisitos: ["Inmunología y Genética", "Biología Molecular de la Célula"]
  },
  "Farmacología Médica": {
    codigo: "MED307B",
    semestre: 5,
    requisitos: ["Bases y Mecanismos de la Enfermedad I"]
  },
  "Bases y Mecanismos de la Enfermedad II": {
    codigo: "MED310B",
    semestre: 5,
    requisitos: ["Bases y Mecanismos de la Enfermedad I", "Morfología III"]
  },
  "Integrado Ciencias Médicas IV": {
    codigo: "MED311A",
    semestre: 5,
    requisitos: ["Morfología III", "Integrado Ciencias Médicas III"]
  },

  // Semestre 6
  "Clínica II": {
    codigo: "MED309A",
    semestre: 6,
    requisitos: ["Microbiología Médica", "Farmacología Médica", "Clínica I", "Bases y Mecanismos de la Enfermedad II"]
  },
  "Integrado Ciencias Médicas V": {
    codigo: "MED312A",
    semestre: 6,
    requisitos: ["Integrado Ciencias Médicas IV", "Clínica I"]
  },

  // Semestre 7
  "Clínica III": {
    codigo: "MED404A",
    semestre: 7,
    requisitos: ["Clínica II"]
  },
  "Integrado Ciencias Médicas VI": {
    codigo: "MED405A",
    semestre: 7,
    requisitos: ["Integrado Ciencias Médicas V", "Clínica II"]
  },

  // Semestre 8
  "Integrado Quirúrgico": {
    codigo: "MED407A",
    semestre: 8,
    requisitos: ["Clínica III"]
  },
  "Medicina Adulto": {
    codigo: "MED409A",
    semestre: 8,
    requisitos: ["Clínica III"]
  },
  "Neurociencias": {
    codigo: "MED408A",
    semestre: 8,
    requisitos: ["Clínica III", "Psicología Médica"]
  },
  "Integrado Ciencias Médicas VII": {
    codigo: "MED406A",
    semestre: 8,
    requisitos: ["Integrado Ciencias Médicas VI", "Clínica III"]
  },

  // Semestre 9
  "Pediatría y Cirugía Infantil": {
    codigo: "MED504B",
    semestre: 9,
    requisitos: ["Clínica III", "Integrado Ciencias Médicas VI"]
  },
  "Obstetricia y Ginecología": {
    codigo: "MED505B",
    semestre: 9,
    requisitos: ["Clínica III", "Integrado Ciencias Médicas VI"]
  },
  "Bases de la Práctica Profesional": {
    codigo: "MED508A",
    semestre: 9,
    requisitos: ["Integrado Quirúrgico", "Neurociencias", "Medicina Adulto"]
  },
  "Integrado Ciencias Médicas VIII": {
    codigo: "MED509A",
    semestre: 9,
    requisitos: ["Integrado Ciencias Médicas VII"]
  },

  // Semestre 10
  "Internado de Cirugía": {
    codigo: "MED601B",
    semestre: 10,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },
  "Internado de Medicina Interna": {
    codigo: "MED602B",
    semestre: 10,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },
  "Internado de Urgencias": {
    codigo: "MED606A",
    semestre: 10,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },

  // Semestre 11
  "Internado de Obstetricia y Ginecología": {
    codigo: "MED603B",
    semestre: 11,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },
  "Internado de Pediatría": {
    codigo: "MED604B",
    semestre: 11,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },
  "Internado de Dermatología": {
    codigo: "MED611A",
    semestre: 11,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },
  "Internado de Otorrino-Laringología": {
    codigo: "MED607A",
    semestre: 11,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },

  // Semestre 12
  "Internado de Medicina Familiar": {
    codigo: "MED605A",
    semestre: 12,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },
  "Internado de Neuripsiquiatría Clínica": {
    codigo: "MED608A",
    semestre: 12,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },
  "Internado de Oftalmología": {
    codigo: "MED609A",
    semestre: 12,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },
  "Internado de Profundización": {
    codigo: "MED612A",
    semestre: 12,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },
  "Internado Electivo": {
    codigo: "MED610A",
    semestre: 12,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  }
};
