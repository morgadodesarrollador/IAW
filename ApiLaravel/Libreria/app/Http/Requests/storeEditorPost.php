<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class storeEditorPost extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {   //reglas de validaciones de los parámetros de la request
        return [
            'nombre_editorial' => 'required|min:5|max:500'
        ];
    }
}
