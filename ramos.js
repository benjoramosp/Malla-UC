const ramos = {
  "Bases y Fundamentos de la Medicina I": {
    semestre: 1
  },
  "Química": {
    semestre: 1
  },
  "Psicología Médica": {
    semestre: 1
  },
  "Física": {
    semestre: 1
  },
  "Razonamiento Matemático": {
    semestre: 1
  },
  "OFG I": {
    semestre: 1
  },

  "Bases y Fundamentos de la Medicina II": {
    semestre: 2,
    requisitos: ["Bases y Fundamentos de la Medicina I"]
  },
  "Morfología I": {
    semestre: 2,
    requisitos: ["Bases y Fundamentos de la Medicina I"]
  },
  "Biología Molecular de la Célula": {
    semestre: 2,
    requisitos: ["Química"]
  },
  "Bioestadística": {
    semestre: 2,
    requisitos: ["Bases y Fundamentos de la Medicina I", "Razonamiento Matemático"]
  },
  "Integrado Ciencias Médicas I": {
    semestre: 2,
    requisitos: ["Bases y Fundamentos de la Medicina I"]
  },
  "OFG II": {
    semestre: 2
  },

  "Morfología II": {
    semestre: 3,
    requisitos: ["Morfología I"]
  },
  "Inmunología y Genética": {
    semestre: 3,
    requisitos: ["Biología Molecular de la Célula"]
  },
  "Antropología y Ética": {
    semestre: 3,
    requisitos: ["Bases y Fundamentos de la Medicina II"]
  },
  "Salud Pública": {
    semestre: 3,
    requisitos: ["Bioestadística"]
  },
  "Integrado Ciencias Médicas II": {
    semestre: 3,
    requisitos: ["Integrado Ciencias Médicas I"]
  },
  "OFG III": {
    semestre: 3
  },

  "Morfología III": {
    semestre: 4,
    requisitos: ["Morfología II"]
  },
  "Bases y Mecanismos de la Enfermedad I": {
    semestre: 4,
    requisitos: ["Morfología II", "Inmunología y Genética", "Biología Molecular de la Célula"]
  },
  "Integrado Ciencias Médicas III": {
    semestre: 4,
    requisitos: ["Integrado Ciencias Médicas II", "Morfología II"]
  },
  "Teológico": {
    semestre: 4
  },

  "Clínica I": {
    semestre: 5,
    requisitos: ["Salud Pública", "Antropología y Ética", "Inmunología y Genética", "Morfología III", "Bases y Mecanismos de la Enfermedad I"]
  },
  "Microbiología Médica": {
    semestre: 5,
    requisitos: ["Inmunología y Genética", "Biología Molecular de la Célula"]
  },
  "Farmacología Médica": {
    semestre: 5,
    requisitos: ["Bases y Mecanismos de la Enfermedad I"]
  },
  "Bases y Mecanismos de la Enfermedad II": {
    semestre: 5,
    requisitos: ["Bases y Mecanismos de la Enfermedad I", "Morfología III"]
  },
  "Integrado Ciencias Médicas IV": {
    semestre: 5,
    requisitos: ["Morfología III", "Integrado Ciencias Médicas III"]
  },

  "Clínica II": {
    semestre: 6,
    requisitos: ["Microbiología Médica", "Farmacología Médica", "Clínica I", "Bases y Mecanismos de la Enfermedad II"]
  },
  "Integrado Ciencias Médicas V": {
    semestre: 6,
    requisitos: ["Integrado Ciencias Médicas IV", "Clínica I"]
  },

  "Clínica III": {
    semestre: 7,
    requisitos: ["Clínica II"]
  },
  "Integrado Ciencias Médicas VI": {
    semestre: 7,
    requisitos: ["Integrado Ciencias Médicas V", "Clínica II"]
  },

  "Integrado Quirúrgico": {
    semestre: 8,
    requisitos: ["Clínica III"]
  },
  "Medicina Adulto": {
    semestre: 8,
    requisitos: ["Clínica III"]
  },
  "Neurociencias": {
    semestre: 8,
    requisitos: ["Clínica III", "Psicología Médica"]
  },
  "Integrado Ciencias Médicas VII": {
    semestre: 8,
    requisitos: ["Integrado Ciencias Médicas VI", "Clínica III"]
  },

  "Pediatría y Cirugía Infantil": {
    semestre: 9,
    requisitos: ["Clínica III", "Integrado Ciencias Médicas VI"]
  },
  "Obstetricia y Ginecología": {
    semestre: 9,
    requisitos: ["Clínica III", "Integrado Ciencias Médicas VI"]
  },
  "Bases de la Práctica Profesional": {
    semestre: 9,
    requisitos: ["Integrado Quirúrgico", "Neurociencias", "Medicina Adulto"]
  },
  "Integrado Ciencias Médicas VIII": {
    semestre: 9,
    requisitos: ["Integrado Ciencias Médicas VII"]
  },

  "Internado de Cirugía": {
    semestre: 10,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },
  "Internado de Medicina Interna": {
    semestre: 10,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },
  "Internado de Urgencias": {
    semestre: 10,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },

  "Internado de Obstetricia y Ginecología": {
    semestre: 11,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },
  "Internado de Pediatría": {
    semestre: 11,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },
  "Internado de Dermatología": {
    semestre: 11,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },
  "Internado de Otorrino-Laringología": {
    semestre: 11,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },

  "Internado de Medicina Familiar": {
    semestre: 12,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },
  "Internado de Neuripsiquiatría Clínica": {
    semestre: 12,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },
  "Internado de Oftalmología": {
    semestre: 12,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },
  "Internado de Profundización": {
    semestre: 12,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  },
  "Internado Electivo": {
    semestre: 12,
    requisitos: ["Integrado Ciencias Médicas VII", "Integrado Quirúrgico", "Neurociencias", "Medicina Adulto", "Pediatría y Cirugía Infantil", "Obstetricia y Ginecología", "Bases de la Práctica Profesional", "Integrado Ciencias Médicas VIII"]
  }
};
