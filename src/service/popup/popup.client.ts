export type Popup = {
    _id: string;
    images: string[];
    isActive: boolean;
    showOncePerSession: boolean;
    startsAt: string | null;
    endsAt: string | null;
    createdAt?: string;
    updatedAt?: string;
  };
  
  export type CreatePopupPayload = {
    images: string[];
    isActive?: boolean;
    showOncePerSession?: boolean;
    startsAt?: string | null;
    endsAt?: string | null;
  };
  
  export type UpdatePopupPayload = Partial<CreatePopupPayload>;
  
  type ApiErrorResponse = {
    message?: string;
  };
  
  type DeletePopupResponse = {
    message: string;
  };
  
  export async function getAllPopupsClient(): Promise<Popup[]> {
    const res = await fetch("/api/popup", {
      cache: "no-store",
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch popups");
    }
  
    return res.json();
  }
  
  export async function getActivePopupClient(): Promise<Popup | null> {
    const res = await fetch("/api/popup/active", {
      cache: "no-store",
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch active popup");
    }
  
    return res.json();
  }
  
  export async function createPopupClient(
    payload: CreatePopupPayload
  ): Promise<Popup> {
    const res = await fetch("/api/popup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  
    const data: Popup | ApiErrorResponse = await res.json();
  
    if (!res.ok) {
      throw new Error(
        "message" in data && data.message
          ? data.message
          : "Failed to create popup"
      );
    }
  
    return data as Popup;
  }
  
  export async function updatePopupClient(
    id: string,
    payload: UpdatePopupPayload
  ): Promise<Popup> {
    const res = await fetch(`/api/popup?id=${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  
    const data: Popup | ApiErrorResponse = await res.json();
  
    if (!res.ok) {
      throw new Error(
        "message" in data && data.message
          ? data.message
          : "Failed to update popup"
      );
    }
  
    return data as Popup;
  }
  
  export async function deletePopupClient(
    id: string
  ): Promise<DeletePopupResponse> {
    const res = await fetch(`/api/popup?id=${id}`, {
      method: "DELETE",
    });
  
    const data: DeletePopupResponse | ApiErrorResponse = await res.json();
  
    if (!res.ok) {
      throw new Error(
        "message" in data && data.message
          ? data.message
          : "Failed to delete popup"
      );
    }
  
    return data as DeletePopupResponse;
  }