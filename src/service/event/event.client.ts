export const getAllEventClient = async () => {
    try {
      const response = await fetch('/api/events');
      if (!response.ok) throw new Error('Failed to fetch events');
      const data = await response.json();
      return Array.isArray(data) ? data : (Array.isArray(data?.data) ? data.data : []);
    } catch (error) {
      console.error("Error fetching events:", error);
      return [];
    }
  };