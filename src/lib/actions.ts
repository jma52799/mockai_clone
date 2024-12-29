
export async function updateNumberOfCompletedQuestions(newCount: number): Promise<number> {
    // This is just a mock call so it only simulates a small delay and return the same value:
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(newCount); 
      }, 500);
    });
}
  