<template >
    <v-form class="templete" >
        <v-row >
            <v-container>
                <v-layout justify-center>
                    <h2 class="mt-12">Registro de Opção de Nacionalidade</h2>
                </v-layout>
            </v-container>
        </v-row>
        <v-row>
            <v-container>
                <v-layout class="topo">
                    <v-p class="ml-8">OPTANTE</v-p><v-p class="ml-8">SENTENÇA</v-p><v-p class="ml-8">AVERBAÇÕES</v-p><v-p class="ml-8">OBSERVAÇÕES</v-p><v-p class="ml-8">COMUNICAÇÃO</v-p><v-p class="ml-8">IMPRIMIR</v-p>
                </v-layout>
            </v-container>
        </v-row>
        <v-col id="lineTopo" class="d-flex " cols="9" ></v-col>
        <v-row>
            <v-container >
                <v-layout >
                    <v-col class="d-flex " cols="4" >
                        <v-text-field filled label="Nome*" append-icon="mdi-magnify"></v-text-field>
                        
                        
                    </v-col>
                    <v-col  class="d-flex" cols="2">
                        <v-select :items="sexo" label = "Sexo*" filled > </v-select>
                    </v-col>
                    <v-col class="d-flex" cols="4">
                        <v-text-field filled label="Doc. Identificação"></v-text-field>
                    </v-col>
                    <v-col class="d-flex" cols="2"> 
                        <v-select filled :items="profissao" label="Profissão*" ></v-select>
                    </v-col>
                </v-layout>
            </v-container>
        </v-row>
        <v-row>
            <v-container>
                <v-layout id="stylo">
                    <v-col class="d-flex tp-5" cols="5">
                        <v-text-field filled label="Pai" ></v-text-field>
                    </v-col>
                    <v-col class="d-flex" cols="5">
                        <v-text-field filled label="Mãe" ></v-text-field>
                    </v-col>
                </v-layout>
            </v-container>
        </v-row>
        <v-row>
            <v-container>
                <v-layout id="stylos">
                    <v-col class="d-flex" cols="2">
                        <v-select filled :items="estadoCivil" label="Estado Civil" ></v-select>
                    </v-col>
                    <v-col class="d-flex" cols="5">
                        <v-text-field filled label="Nome do Cônjuge"></v-text-field>
                    </v-col>
                </v-layout>
            </v-container>
        </v-row>
        <v-col id="line" class="d-flex " cols="9" ></v-col>
        <v-row class="naturalidade">
            <v-container>
                <v-layout justify-center>
                    <h3>NATURALIDADE</h3>
                </v-layout>
            </v-container>
        </v-row>
        <v-row>
            <v-container>
                <v-layout class="selectNaturalidade">
                    <v-col class="d-flex" cols="3" >
                        <v-select filled :items="país" label="País" ></v-select>
                    </v-col>
                    <v-col class="d-flex" cols="3" >
                        <v-select filled :items="estado" label="Estado" ></v-select>
                    </v-col>
                    <v-col class="d-flex" cols="3" >
                        <v-select filled :items="cidade" label="Cidade" ></v-select>
                    </v-col>
                </v-layout>
            </v-container>
        </v-row>
        <v-col id="line" class="d-flex " cols="9" ></v-col>
        <v-row>
            <v-container>
                <v-layout class="residencia" justify-center>
                    <h3>RESIDÊNCIA</h3>
                </v-layout>
            </v-container>
        </v-row>
        <v-row>
            <v-container>
                <v-layout class="textResidencia" >
                    <v-col class="d-flex" cols="4" >
                        <v-text-field filled label="Endereço" ></v-text-field>
                    </v-col>
                    <v-col class="d-flex" cols="1" >
                        <v-text-field filled label="N°" ></v-text-field>
                    </v-col>
                    <v-col class="d-flex" cols="2" >
                        <v-text-field filled label="Complemento" ></v-text-field>
                    </v-col>
                    <v-col class="d-flex" cols="2" >
                        <v-text-field filled label="CEP" ></v-text-field>
                    </v-col>
                </v-layout>
            </v-container>
        </v-row>
        <v-row>
            <v-container>
                <v-layout justify-center>
                    <v-btn large id="btn">PRÓXIMO PASSO</v-btn>
                </v-layout>
            </v-container>
        </v-row>
    </v-form>
</template>


<script>
    export default {
        data: () => ({
            sexo: ['Masculino', 'Feminino'],
            profissao:['Desenvolvedor', 'Arquiteto', 'Motorista', 'Vendedor'],
            estadoCivil:['Casado', 'Solteiro'],
            país:['Brasil', 'Canadá', 'EUA'],
            estado:['BA', 'ON', 'CA'],
            cidade:['Feira de Santana', 'Toronto', 'Los Angeles']


        }),
    }
</script>

<style>

    .templete{
        position:relative;
        padding-left: 20%;
        padding-right: 3%;
    }   

    .topo{
        position: relative;
        margin-top: 100px;
        font-weight: bolder black;
        font-weight: bold;
    }

    #stylo{
        position: relative;
        top: -40px;
    }

    #stylos{
        position: relative;
        top: -80px;
    }

    #line{
        position: relative;
        border-top: 1.5pt solid rgba(170, 161, 161, 0.2);
        left: 150px;
        top: -100px;
    }

    #lineTopo{
        position: relative;
        border-top: 1.5pt solid rgba(170, 161, 161, 0.7);
        left: 15px;
    }

    .naturalidade{
        position: relative;
        top:-80px;
    }

    .selectNaturalidade{
        position: relative;
        top: -80px;
    }

    .residencia{
        position: relative;
        top: -80px;
    }

    .textResidencia{
        position: relative;
        top: -80px;
    }

    #btn{
        background-color: blue;
        color: white;
    }
</style>