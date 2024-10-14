export async function ambilDataUser2() {
  try {
    const response = await axios.get("https://reqres.in/api/users");
    console.log(
      response.data.data.map((user) => `${user.first_name} ${user.last_name}`)
    );
  } catch (error) {
    console.error(error);
  }
}
