<template>
    <div class="vue-template">
            <!-- Formulaire d'inscription -->
        <form>
            <h3>Inscription</h3>
               <!-- Nom -->
            <div class="form-group">
                <label>Nom complet</label>
                <input type="text" class="form-control form-control-lg" />
            </div>
                <!-- Login -->
            <div class="form-group">
                <label>Adresse email</label>
                <input type="email" class="form-control form-control-lg" />
            </div>
                <!-- Password -->
            <div class="form-group">
                <label>Mot de passe </label>
                <input type="password" class="form-control form-control-lg" />
            </div>
                <!-- Boutton Valider -->
            <button type="submit" class="btn btn-dark btn-lg btn-lock">Valider</button>
                <!-- Deja un compte -->
            <p class="forgot-password text-right">
                Deja un compte
            <router-link to="{name : 'login'}">se onnecter?</router-link>
            </p>
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