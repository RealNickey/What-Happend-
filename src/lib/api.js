const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function summarizeText(text) {
  try {
    const response = await fetch(`${API_BASE_URL}/summarize`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error('Failed to summarize text');
    }

    const data = await response.json();
    return data.summarizedText;
  } catch (error) {
    console.error('Error in summarizeText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error('Error in rewriteText:', error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(`${API_BASE_URL}/rewrite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error('Failed to rewrite text');
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console