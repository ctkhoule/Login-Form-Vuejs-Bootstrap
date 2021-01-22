<template>
    <div class="vue-template">
            <!-- Mot de passe oublié -->
        <form>
            <h3>Mot de passe oublié</h3>
                <!-- Email -->
            <div class="form-group">
                <label>Adresse email</label>
                <input type="email" class="form-control form-control-lg" />
            </div>
                <!-- Boutton Réinitialiser mot de passe -->
            <button type="submit" class="btn btn-dark btn-lg btn-lock">Réinitialiser</button>
            
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{}
    }
}
</script>