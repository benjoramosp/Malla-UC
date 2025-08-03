const ramos = {

  "Bases y Fundamentos de la Medicina I": {
    codigo: "MED107A", ciclo: "basico", semestre: 1
  },
  "Química": {
    codigo: "QIM201M", ciclo: "basico", semestre: 1
  },
  "Psicología Médica": {
    codigo: "MED109A", ciclo: "basico", semestre: 1
  },
  "Física": {
    codigo: "FIS119M", ciclo: "basico", semestre: 1
  },
  "Razonamiento Matemático": {
    codigo: "MAT1033", ciclo: "basico", semestre: 1
  },
  "OFG I": {
    ciclo: "basico", semestre: 1
  },

  "Bases y Fundamentos de la Medicina II": {
    codigo: "MED108A", ciclo: "basico", semestre: 2,
    requisitos: ["Bases y Fundamentos de la Medicina I"]
  },
  "Morfología I": {
    codigo: "MED111A", ciclo: "basico", semestre: 2,
    requisitos: ["Bases y Fundamentos de la Medicina I"]
  },
  "Biología Molecular de la Célula": {
    codigo: "BIO239M", ciclo: "basico", semestre: 2,
    requisitos: ["Química"]
  },
  "Bioestadística": {
    codigo: "MED104B", ciclo: "basico", semestre: 2,
    requisitos: ["Bases y Fundamentos de la Medicina I", "Razonamiento Matemático"]
  },
  "Integrado Ciencias Médicas I": {
    codigo: "MED110A", ciclo: "basico", semestre: 2,
    requisitos: ["Bases y Fundamentos de la Medicina I"]
  },
  "OFG II": {
    ciclo: "basico", semestre: 2
  },

  "Morfología II": {
    codigo: "MED212A", ciclo: "basico", semestre: 3,
    requisitos: ["Morfología I"]
  },
  "Inmunología y Genética": {
    codigo: "MED208A", ciclo: "basico", semestre: 3,
    requisitos: ["Biología Molecular de la Célula"]
  },
  "Antropología y Ética": {
    codigo: "MED207A", ciclo: "basico", semestre: 3,
    requisitos: ["Bases y Fundamentos de la Medicina II"]
  },
  "Salud Pública": {
    codigo: "MED206A", ciclo: "basico", semestre: 3,
    requisitos: ["Bioestadística"]
  },
  "Integrado Ciencias Médicas II": {
    codigo: "MED209A", ciclo: "basico", semestre: 3,
    requisitos: ["Integrado Ciencias Médicas I"]
  },
  "OFG III": {
    ciclo: "basico", semestre: 3
  },

  "Morfología III": {
    codigo: "MED213A", ciclo: "basico", semestre: 4,
    requisitos: ["Morfología II"]
  },
  "Bases y Mecanismos de la Enfermedad I": {
    codigo: "MED214A", ciclo: "basico", semestre: 4,
    requisitos: ["Morfología II", "Inmunología y Genética", "Biología Molecular de la Célula"]
  },
  "Integrado Ciencias Médicas III": {
    codigo: "MED210A", ciclo: "basico", semestre: 4,
    requisitos: ["Integrado Ciencias Médicas II", "Morfología II"]
  },
  "Teológico": {
    ciclo: "basico", semestre: 4
  },


  "Clínica I": {
    codigo: "MED308A", ciclo: "intermedio", semestre: 5,
    requisitos: ["Salud Pública", "Antropología y Ética", "Inmunología y Genética", "Morfología III", "Bases y Mecanismos de la Enfermedad I"]
  },
  "Microbiología Médica": {
    codigo: "MED306B", ciclo: "intermedio", semestre: 5,
    requisitos: ["Inmunología y Genética", "Biología Molecular de la Célula"]
  },
  "Farmacología Médica": {
    codigo: "MED307B", ciclo: "intermedio", semestre: 5,
    requisitos: ["Bases y Mecanismos de la Enfermedad I"]
  },
  "Bases y Mecanismos de la Enfermedad II": {
    codigo: "MED310B", ciclo: "intermedio", semestre: 5,
    requisitos: ["Bases y Mecanismos de la Enfermedad I", "Morfología III"]
  },
  "Integrado Ciencias Médicas IV": {
    codigo: "MED311A", ciclo: "intermedio", semestre: 5,
    requisitos: ["Morfología III", "Integrado Ciencias Médicas III"]
  },

  "Clínica II": {
    codigo: "MED309A", ciclo: "intermedio", semestre: 6,
    requisitos: ["Microbiología Médica", "Farmacología Médica", "Clínica I", "Bases y Mecanismos de la Enfermedad II"]
  },
  "Integrado Ciencias Médicas V": {
    codigo: "MED312A", ciclo: "intermedio", semestre: 6,
    requisitos: ["Integrado Ciencias Médicas IV", "Clínica I"]
  },

  "Clínica III": {
    codigo: "MED404A", ciclo: "intermedio", semestre: 7,
    requisitos: ["Clínica II"]
  },
  "Integrado Ciencias Médicas VI": {
    codigo: "MED405A", ciclo: "intermedio", semestre: 7,
    requisitos: ["Integrado Ciencias Médicas V", "Clínica II"]
  },

  "Integrado Quirúrgico": {
    codigo: "MED407A", ciclo: "intermedio", semestre: 8,
    requisitos: ["Clínica III"]
  },
  "Medicina Adulto": {
    codigo: "MED409A", ciclo: "intermedio", semestre: 8,
    requisitos: ["Clínica III"]
  },
  "Neurociencias": {
    codigo: "MED408A", ciclo: "intermedio", semestre: 8,
    requisitos: ["Clínica III", "Psicología Médica"]
  },
  "Integrado Ciencias Médicas VII": {
    codigo: "MED406A", ciclo: "intermedio", semestre: 8,
    requisitos: ["Integrado Ciencias Médicas VI", "Clínica III"]
  },

  "Pediatría y Cirugía Infantil": {
    codigo: "MED504B", ciclo: "intermedio", semestre: 9,
    requisitos: ["Clínica III", "Integrado Ciencias Médicas VI"]
  },
  "Obstetricia y Ginecología": {
    codigo: "MED505B", ciclo: "intermedio", semestre: 9,
    requisitos: ["Clínica III", "Integrado Ciencias Médicas VI"]
  },
  "Bases de la Práctica Profesional": {
    codigo: "MED508A", ciclo: "intermedio", semestre: 9,
    requisitos: ["Integrado Quirúrgico", "Neurociencias", "Medicina Adulto"]
  },
  "Integrado Ciencias Médicas VIII": {
    codigo: "MED509A", ciclo: "intermedio", semestre: 9,
    requisitos: ["Integrado Ciencias Médicas VII"]
  },


  "Internado de Cirugía": {
    codigo: "MED601B", ciclo: "avanzado", semestre: 10,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },
  "Internado de Medicina Interna": {
    codigo: "MED602B", ciclo: "avanzado", semestre: 10,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },
  "Internado de Urgencias": {
    codigo: "MED606A", ciclo: "avanzado", semestre: 10,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },

  "Internado de Obstetricia y Ginecología": {
    codigo: "MED603B", ciclo: "avanzado", semestre: 11,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },
  "Internado de Pediatría": {
    codigo: "MED604B", ciclo: "avanzado", semestre: 11,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },
  "Internado de Dermatología": {
    codigo: "MED611A", ciclo: "avanzado", semestre: 11,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },
  "Internado de Otorrino-Laringología": {
    codigo: "MED607A", ciclo: "avanzado", semestre: 11,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },

  "Internado de Medicina Familiar": {
    codigo: "MED605A", ciclo: "avanzado", semestre: 12,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },
  "Internado de Neuripsiquiatría Clínica": {
    codigo: "MED608A", ciclo: "avanzado", semestre: 12,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },
  "Internado de Oftalmología": {
    codigo: "MED609A", ciclo: "avanzado", semestre: 12,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },
  "Internado de Profundización": {
    codigo: "MED612A", ciclo: "avanzado", semestre: 12,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },
  "Internado Electivo": {
    codigo: "MED610A", ciclo: "avanzado", semestre: 12,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  }
};
