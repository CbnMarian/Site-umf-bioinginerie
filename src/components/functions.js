function CapitalizeName(name) {
  const nameParts = name.split(" ");
  const capitalizedParts = nameParts.map((part) => {
    return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
  });

  return capitalizedParts.join(" ");
}

export default CapitalizeName;
