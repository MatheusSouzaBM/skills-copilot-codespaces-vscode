function skillsMember() {
  return {
    name: "skillsMember",
    type: "skills",
    data: {
      name: "Member",
      description: "A member of the guild.",
      skills: [
        {
          name: "Sword Swing",
          description: "Swing a sword at an enemy.",
          type: "attack",
          damage: 10,
          cost: 5,
        },
        {
          name: "Block",
          description: "Block an incoming attack.",
          type: "defend",
          cost: 5,
        },
        {
          name: "Heal",
          description: "Heal yourself or an ally.",
          type: "heal",
          amount: 10,
          cost: 5,
        },
      ],
    },
  };
}